"""Calculate some values to be reported on the results of experiment 1. 
There is one TSV file per response."""

import pandas as pd
import numpy as np
from scipy.stats.stats import pearsonr

##############################################################################
# FUNCTIONS
def flatten(listOfLists):
    """Flatten a list of lists to a list"""
    return [item for l in listOfLists for item in l]

def countNonNullValues(l):
    """Return the count of non null values in a given list."""
    return sum(1 for e in l if not pd.isna(e))

def countNullValues(l):
    """Return the count of null values in a given list."""
    return sum(1 for e in l if pd.isna(e))

def filterQs(participants, q, rangeij):
    """
    Return answers to a particular question in a range of experimental items, 
    for the given participant(s), as a flattened list.

    Parameters
    ----------
    participants : List
        The participant IDs.
    q : String
        The question.
    rangeij : Range
        The experimental item range (e.g., range(11,21) = the RG questions).

    Returns
    -------
    List
        A flattened list of answers of the participant(s) to the question
        in the range of experimental items.
    """
    return flatten([DFs[p].loc[:, tuple([str(k) + q 
                                         for k in rangeij])].iloc[0].tolist() 
                        for p in participants])

def changeInLength(s1, s2):
    """Return the percentage of the length of s2 given that s1 = 100%."""
    return 100 * len(s2) / len(s1) 
        
##############################################################################
# 1. IMPORT RESULTS
participants = [1,2,3,4,5,6,8,9,10,11] # Tthe participant IDs

# List of column names to use when reading the TSVs (bc there are duplicate questions)
columns = ["Informed consent", "Gender", "Age", "Logic experience"]
for i in range(25):
    columns += [str(i+1) + q  for q in ["Correct?", "Clear?", "Fluent?", "Post-Edit"]]
columns += ["General review", "Final comments"]

# Read the TSVs into a list of Pandas DataFrames
DFs = {}
for p in participants:
    DFs[p] = pd.read_csv("results/TSVs/1." + str(p) + " results.tsv", 
                   sep="\t", header=0, names=columns)
    
translations = flatten([pd.read_csv("batches/batch" + str(p) + ".csv", 
                                header=0).loc[:19, "Translation"] 
                    for p in participants])    

# Question ranges
allqs = range(1,26)
GGCqs = range(1,11)
RGqs = range(11,21)
nonfillerqs = range(1,21)
fillerqs = range(21,26)


##############################################################################
# 2. ANALYSES
lines = []
#lines.append("".format())


lines.append("GENDER")
genders = [df.iloc[0]["Gender"] for df in DFs.values()]
lines.append("\tMale: {} out of {} is {} percent".format(
    genders.count("Male"), 
    len(participants), 
    genders.count("Male")/len(participants)))
lines.append("\tFemale: {} out of {} is {} percent".format(
    genders.count("Female"), 
    len(participants), 
    genders.count("Female")/len(participants)))
lines.append("\tPrefer not to say: {} out of {} is {} percent".format(
    genders.count("Prefer not to say"), 
    len(participants), 
    genders.count("Prefer not to say")/len(participants)))


lines.append("\nAGE")
ages = [df.iloc[0]["Age"] for df in DFs.values()]
lines.append("\tMean: {}".format(np.mean(ages)))
lines.append("\tSD: {}".format(np.std(ages)))


lines.append("\nLOGIC EXPERIENCE")
experiences = [df.iloc[0]["Logic experience"] for df in DFs.values()]
lines.append("\tMean: {}".format(np.mean(experiences)))
lines.append("\tSD: {}".format(np.std(experiences)))


lines.append("\nFILLER CORRECTNESS")
fillers = filterQs(participants, "Correct?", fillerqs)
lines.append("\tCorrect: {} out of {} is {} percent".format(
    fillers.count("Yes"), 
    len(fillers), 
    fillers.count("Yes")/len(fillers)))
lines.append("\tIncorrect: {} out of {} is {} percent".format(
    fillers.count("No"), 
    len(fillers), 
    fillers.count("No")/len(fillers)))


lines.append("\nPARTICIPANTS WHO SPOTTED LESS THAN 2 FILLERS")
ignore =[]    
for p, df in DFs.items():
    fillers = df.loc[:, tuple([str(k) + "Correct?" 
                                          for k in fillerqs])].iloc[0].tolist()
    if fillers.count("No") < 2:
        ignore.append(p)
        lines.append("\tParticipant {}".format(p))
if len(ignore) == 0:
    lines.append("\tNone of the participants")



lines.append("\n\nNOW FOR THE NORMAL (NON-FILLER ITEMS):")
withVarsIndices = [t for t in range(len(translations)) if 
            any(s in translations[t] for s in [' ' + c + ' ' for c in "xyzwv"])]
withoutVarsIndices = [t for t in range(len(translations)) if not
            any(s in translations[t] for s in [' ' + c + ' ' for c in "xyzwv"])] 

correct = filterQs(participants, "Correct?", nonfillerqs)
GGCcorrect = filterQs(participants, "Correct?", GGCqs)
RGcorrect = filterQs(participants, "Correct?", RGqs)
withVarsCorrect = [correct[i] for i in withVarsIndices]
withoutVarsCorrect = [correct[i] for i in withoutVarsIndices]

clear = filterQs(participants, "Clear?", nonfillerqs)
GGCclear = filterQs(participants, "Clear?", GGCqs)
RGclear = filterQs(participants, "Clear?", RGqs)
withVarsClear = [clear[i] for i in withVarsIndices]
withoutVarsClear = [clear[i] for i in withoutVarsIndices]

fluent = filterQs(participants, "Fluent?", nonfillerqs)
GGCfluent = filterQs(participants, "Fluent?", GGCqs)
RGfluent = filterQs(participants, "Fluent?", RGqs)
withVarsFluent = [fluent[i] for i in withVarsIndices]
withoutVarsFluent = [fluent[i] for i in withoutVarsIndices]

edits = filterQs(participants, "Post-Edit", nonfillerqs)
GGCedits = filterQs(participants, "Post-Edit", GGCqs)
RGedits = filterQs(participants, "Post-Edit", RGqs)

subsets = {"all translations":[correct, clear, fluent, edits],
     "GGC translations":[GGCcorrect, GGCclear, GGCfluent, GGCedits],
     "RG translations":[RGcorrect, RGclear, RGfluent, RGedits],
     "translations with variables":[withVarsCorrect, withVarsClear, withVarsFluent],
     "translations without variables":[withoutVarsCorrect, withoutVarsClear, withoutVarsFluent]}


lines.append("\nCORRECTNESS")
for s, l in subsets.items():
    lines.append("\tFor {}".format(s))
    lines.append("\t\tYes: {} out of {} is {} percent".format( 
      l[0].count("Yes"), len(l[0]), l[0].count("Yes") / len(l[0])))
    lines.append("\t\tNo: {} out of {} is {} percent".format( 
          l[0].count("No"), len(l[0]), l[0].count("No") / len(l[0])))


lines.append("\nCLARITY")
for s, l in subsets.items():
    lines.append("\tFor {}".format(s))
    lines.append("\t\tMean: {}".format(np.mean(l[1])))
    lines.append("\t\tSD: {}".format(np.std(l[1])))


lines.append("\nFLUENCY")
for s, l in subsets.items():
    lines.append("\tFor {}".format(s))
    lines.append("\t\tMean: {}".format(np.mean(l[2])))
    lines.append("\t\tSD: {}".format(np.std(l[2])))


lines.append("\nPOST-EDITS")
for s in ["all translations", "GGC translations", "RG translations"]:
    lines.append("\tFor {}".format(s))
    lines.append("\t\tEdited: {} out of {} is {} percent".format( 
      countNonNullValues(subsets[s][3]), len(subsets[s][3]), countNonNullValues(subsets[s][3]) / len(subsets[s][3])))
    lines.append("\t\tNot edited: {} out of {} is {} percent".format( 
          countNullValues(subsets[s][3]), len(subsets[s][3]), countNullValues(subsets[s][3]) / len(subsets[s][3])))


lines.append("\nCORRELATION BETWEEN CLARITY AND FLUENCY")
lines.append("Correlation: {}\t\tP-value: {}\t\tDF: {}".format(
    pearsonr(clear, fluent)[0],
    pearsonr(clear, fluent)[1],
    len(clear) - 2))


formulas = flatten([pd.read_csv("batches/batch" + str(p) + ".csv", 
                                header=0).loc[:19, "Formula"] 
                    for p in participants])
formula_lengths = [len(f) for f in formulas]
lines.append("\nCORRELATION BETWEEN FORMULA LENGTH AND CLARITY")
lines.append("Correlation: {}\t\tP-value: {}\t\tDF: {}".format(
    pearsonr(formula_lengths, clear)[0],
    pearsonr(formula_lengths, clear)[1],
    len(formulas) - 2))
lines.append("CORRELATION BETWEEN FORMULA LENGTH AND FLUENCY")
lines.append("Correlation: {}\t\tP-value: {}\t\tDF: {}".format(
    pearsonr(formula_lengths, fluent)[0],
    pearsonr(formula_lengths, fluent)[1],
    len(formulas) - 2))


lines.append("\nCHANGE IN LENGTH BETWEEN OLD AND NEW TRANSLATIONS")
edited_translations = [translations[i] for i in range(len(translations))
                       if not pd.isna(edits[i])] #if the translation is edited
nonNullEdits = [e for e in edits 
         if not pd.isna(e)] #if the translation is edited
length_change = [changeInLength(t,e) 
                 for t, e in zip(edited_translations, nonNullEdits)]
lines.append("\tMean: {}".format(np.mean(length_change)))
lines.append("\tSD: {}".format(np.std(length_change)))

with open("analysis.txt", "w") as f:
    f.writelines([l + "\n" for l in lines])
f.close()


##############################################################################
# 2. Write to CSV
for p in participants:
    batch_df = pd.read_csv("batches/batch" + str(p) + ".csv", header=0)
    
    for q in ["Correct?", "Clear?", "Fluent?", "Post-Edit"]:
        batch_df[q] = filterQs([p], q, allqs)
        
    batch_df.to_csv("results/CSVs/1." + str(p) + " results.csv", sep=',')




