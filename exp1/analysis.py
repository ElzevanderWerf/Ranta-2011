"""Extract some useful values from the results of experiment 1. There is one
TSV file per response."""

import pandas as pd
import statistics as stat

##############################################################################
# FUNCTIONS
def flatten(listOfLists):
    return [item for l in listOfLists for item in l]

def countNonNullValues(l):
    return sum(1 for e in l if not pd.isna(e))

def countNullValues(l):
    return sum(1 for e in l if pd.isna(e))

def filterQs(DFs, q, rangeij, multiple=True):
    if multiple:
        return flatten([df.loc[:, tuple([str(k) + q 
                                         for k in rangeij])].iloc[0].tolist() 
                        for df in DFs])
    else:
        return DFs.loc[:, tuple([str(k) + q 
                                         for k in rangeij])].iloc[0].tolist()
        
##############################################################################
# 1. IMPORT RESULTS
responses = 2  # number of responses, TODO change]

allqs = range(1,26)
GGCqs = range(1,11)
RGqs = range(11,21)
nonfillerqs = range(1,21)
fillerqs = range(21,26)

# List of column names to use when reading the TSVs (bc there are duplicates)
# TODO add Informed Consent + remove why incorrect?
columns = ["Informed consent", "Gender", "Age", "Logic experience"]
for i in range(25):
    columns += [str(i+1) + q  for q in ["Correct?", "Clear?", "Fluent?", "Post-Edit"]]
columns += ["General review", "Final comments"]

# Read the TSVs into a list of Pandas DataFrames
# TODO remove " test try"
DFs = [pd.read_csv("results/TSVs/1." + str(i+1) + " test try.tsv", 
                   sep="\t", header=0, names=columns) for i in range(responses)]


##############################################################################
# 2. ANALYSES
# GENDER
genders = [df.iloc[0]["Gender"] for df in DFs]
print("Gender\n\tMale:", genders.count("Male"), genders.count("Male") / len(genders))
print("\tFemale:", genders.count("Female"), genders.count("Female") / len(genders))
print("\tPrefer not to say:", genders.count("Prefer not to say"), genders.count("Prefer not to say") / len(genders))

# AGE
ages = [df.iloc[0]["Age"] for df in DFs]
print("\n\nAge\n\tMean:", stat.mean(ages))
print("\tSD:", stat.stdev(ages))

# LOGIC EXPERIENCE
experiences = [df.iloc[0]["Logic experience"] for df in DFs]
print("\n\nLogic experience\n\tMean:", stat.mean(experiences))
print("\tSD:", stat.stdev(experiences))

# FILLER CORRECTNESS
# TODO misschien per participant kijken. Als ze minder dan drie fillers gespot hebben, iets doen?
fillers = filterQs(DFs, "Correct?", fillerqs)
print("\n\nFiller correctness\n\tYes:", fillers.count("Yes"), fillers.count("Yes") / len(fillers))
print("\tNo:", fillers.count("No"), fillers.count("No") / len(fillers))

#Find participants that spotted less than 3 fillers
print("Participants who spotted less than 3 fillers:")
fillersPerParticipant = [df.loc[:, tuple([str(k) + "Correct?" 
                                          for k in fillerqs])].iloc[0].tolist() 
                         for df in DFs]
for p in range(len(fillersPerParticipant)):
    if fillersPerParticipant[p].count("Incorrect") < 3:
        print(p+1, fillersPerParticipant[p])


print("\n\n\nFor the normal (non-filler) items:")
# CORRECTNESS
correct = filterQs(DFs, "Correct?", nonfillerqs)
GGCcorrect = filterQs(DFs, "Correct?", GGCqs)
RGcorrect = filterQs(DFs, "Correct?", RGqs)

print("Correctness\n\tOverall\n\t\tYes:", correct.count("Yes"), correct.count("Yes") / len(correct))
print("\t\tNo:", correct.count("No"), correct.count("No") / len(correct))
print("\tFor GGC formulas:\n\t\tYes:", GGCcorrect.count("Yes"), GGCcorrect.count("Yes") / len(GGCcorrect))
print("\t\tNo:", GGCcorrect.count("No"), GGCcorrect.count("No") / len(GGCcorrect))
print("\tFor RG formulas:\n\t\tYes:", RGcorrect.count("Yes"), RGcorrect.count("Yes") / len(RGcorrect))
print("\t\tNo:", RGcorrect.count("No"), RGcorrect.count("No") / len(RGcorrect))

# CLARITY
clear = filterQs(DFs, "Clear?", nonfillerqs)
GGCclear = filterQs(DFs, "Clear?", GGCqs)
RGclear = filterQs(DFs, "Clear?", RGqs)

print("\n\nClarity\n\tOverall\n\t\tMean:", stat.mean(clear))
print("\t\tSD:", stat.stdev(clear))
print("\tFor GGC formulas:\n\t\tMean:", stat.mean(GGCclear))
print("\t\tSD:", stat.stdev(GGCclear))
print("\tFor RG formulas:\n\t\tMean:", stat.mean(RGclear))
print("\t\tSD:", stat.stdev(RGclear))

# FLUENCY
fluent = filterQs(DFs, "Fluent?", nonfillerqs)
GGCfluent = filterQs(DFs, "Fluent?", GGCqs)
RGfluent = filterQs(DFs, "Fluent?", RGqs)

print("\n\nFluency\n\tMean:", stat.mean(fluent))
print("\tSD:", stat.stdev(fluent))
print("\tFor GGC formulas:\n\t\tMean:", stat.mean(GGCfluent))
print("\t\tSD:", stat.stdev(GGCfluent))
print("\tFor RG formulas:\n\t\tMean:", stat.mean(RGfluent))
print("\t\tSD:", stat.stdev(RGfluent))

# POST-EDITS
edits = filterQs(DFs, "Post-Edit", nonfillerqs)
GGCedits = filterQs(DFs, "Post-Edit", GGCqs)
RGedits = filterQs(DFs, "Post-Edit", RGqs)

print("\n\nPost-edits\n\tOverall\n\t\tEdited:", countNonNullValues(edits), countNonNullValues(edits) / len(edits))
print("\t\tNot edited:", countNullValues(edits), countNullValues(edits) / len(edits))
print("\tFor GGC formulas:\n\t\tEdited:", countNonNullValues(GGCedits), countNonNullValues(GGCedits) / len(GGCedits))
print("\t\tNot edited:", countNullValues(GGCedits), countNullValues(GGCedits) / len(GGCedits))
print("\tFor RG formulas:\n\t\tEdited:", countNonNullValues(RGedits), countNonNullValues(RGedits) / len(RGedits))
print("\t\tNot edited:", countNullValues(RGedits), countNullValues(RGedits) / len(RGedits))

##############################################################################
# 2. Write to CSV
for r in range(responses):
    batch_df = pd.read_csv("batches/batch" + str(r+1) + ".csv", header=0)
    
    batch_df["Correct?"] = filterQs(DFs[r], "Correct?", allqs , multiple=False)
    batch_df["Clear?"] = filterQs(DFs[r], "Clear?", allqs, multiple=False)
    batch_df["Fluent?"] = filterQs(DFs[r], "Fluent?", allqs, multiple=False)
    batch_df["Post-Edit"] = filterQs(DFs[r], "Post-Edit", allqs, multiple=False)
        
    batch_df.to_csv("results/CSVs/1." + str(r+1) + " test try.csv", sep=',')



