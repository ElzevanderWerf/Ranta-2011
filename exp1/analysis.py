"""Extract some useful values from the results of experiment 1. There is one
TSV file per response."""

import pandas as pd
import numpy as np

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
                        for df in DFs.values()])
    else:
        return DFs.loc[:, tuple([str(k) + q 
                                         for k in rangeij])].iloc[0].tolist()
        
##############################################################################
# 1. IMPORT RESULTS
responses = [1,2,3,5,6,8,9,11] #TODO change

allqs = range(1,26)
GGCqs = range(1,11)
RGqs = range(11,21)
nonfillerqs = range(1,21)
fillerqs = range(21,26)

# List of column names to use when reading the TSVs (bc there are duplicates)
columns = ["Informed consent", "Gender", "Age", "Logic experience"]
for i in range(25):
    columns += [str(i+1) + q  for q in ["Correct?", "Clear?", "Fluent?", "Post-Edit"]]
columns += ["General review", "Final comments"]

# Read the TSVs into a list of Pandas DataFrames
DFs = {}
for r in responses:
    DFs[r] = pd.read_csv("results/TSVs/1." + str(r) + " results.tsv", 
                   sep="\t", header=0, names=columns)


##############################################################################
# 2. ANALYSES
# GENDER
genders = [df.iloc[0]["Gender"] for df in DFs.values()]
print("Gender\n\tMale:", genders.count("Male"), genders.count("Male") / len(genders))
print("\tFemale:", genders.count("Female"), genders.count("Female") / len(genders))
print("\tPrefer not to say:", genders.count("Prefer not to say"), genders.count("Prefer not to say") / len(genders))

# AGE
ages = [df.iloc[0]["Age"] for df in DFs.values()]
print("\n\nAge\n\tMean:", np.mean(ages))
print("\tSD:", np.std(ages))

# LOGIC EXPERIENCE
experiences = [df.iloc[0]["Logic experience"] for df in DFs.values()]
print("\n\nLogic experience\n\tMean:", np.mean(experiences))
print("\tSD:", np.std(experiences))

# FILLER CORRECTNESS
fillers = filterQs(DFs, "Correct?", fillerqs)
print("\n\nFiller correctness\n\tYes:", fillers.count("Yes"), fillers.count("Yes") / len(fillers))
print("\tNo:", fillers.count("No"), fillers.count("No") / len(fillers))

#Find participants that spotted less than 3 fillers
print("Participants who spotted less than 3 fillers:")
fillersPerParticipant = [df.loc[:, tuple([str(k) + "Correct?" 
                                          for k in fillerqs])].iloc[0].tolist() 
                         for df in DFs.values()]
for p in range(len(fillersPerParticipant)):
    if fillersPerParticipant[p].count("No") < 3:
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

print("\n\nClarity\n\tOverall\n\t\tMean:", np.mean(clear))
print("\t\tSD:", np.std(clear))
print("\tFor GGC formulas:\n\t\tMean:", np.mean(GGCclear))
print("\t\tSD:", np.std(GGCclear))
print("\tFor RG formulas:\n\t\tMean:", np.mean(RGclear))
print("\t\tSD:", np.std(RGclear))

# FLUENCY
fluent = filterQs(DFs, "Fluent?", nonfillerqs)
GGCfluent = filterQs(DFs, "Fluent?", GGCqs)
RGfluent = filterQs(DFs, "Fluent?", RGqs)

print("\n\nFluency\n\tOverall\n\t\tMean:", np.mean(fluent))
print("\t\tSD:", np.std(fluent))
print("\tFor GGC formulas:\n\t\tMean:", np.mean(GGCfluent))
print("\t\tSD:", np.std(GGCfluent))
print("\tFor RG formulas:\n\t\tMean:", np.mean(RGfluent))
print("\t\tSD:", np.std(RGfluent))

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
for r in responses:
    batch_df = pd.read_csv("batches/batch" + str(r) + ".csv", header=0)
    
    for q in ["Correct?", "Clear?", "Fluent?", "Post-Edit"]:
        batch_df[q] = filterQs(DFs[r], q, allqs, multiple=False)
        
    batch_df.to_csv("results/CSVs/1." + str(r) + " results.csv", sep=',')



