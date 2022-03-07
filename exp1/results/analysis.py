"""Extract some useful values from the results of experiment 1. There is one
TSV file per response."""

import pandas as pd
import statistics as stat

responses = 1  # number of responses, TODO change

DFs = [pd.read_csv("results/1." + str(i) + ".tsv", sep="\t", header=0) for i in range(1,responses+1)]
# The shape of each df in DFs is: (1,131)
#   1: 1 response
#   131: Time stamp + Q1 + Q2 + Q3 + 25 * (Q4 + Q5 + Q6 + Q7 + Q8) + Q9 + Q10

questions ={1:"What is your gender?",
            2:"How old are you?",
            3:"How would you rate your knowledge of and familiarity with first-order logic?",
            4:"Is the translation correct?",
            5:"If your answer to the previous question was \"no\", explain why the translation is incorrect.",
            6:"Is the translation clear?",
            7:"Is the translation fluent?",
            8:"Do you have a suggestion for a better translation? If so, then write it down here.",
            9:"Give a general structured review of the strengths and weaknesses of the translation system. With which types of sentences does the system have difficulties? For which types of sentences do you believe the system performs sufficiently well?",
            10:"Do you have any final comments?"
            }

# GENDER
genders = [df.at[0, questions[1]] for df in DFs]
print("Gender\n\tMale:", genders.count("Male"), genders.count("Male") / len(genders))
print("\tFemale:", genders.count("Female"), genders.count("Female") / len(genders))
print("\tPrefer not to say:", genders.count("Prefer not to say"), genders.count("Prefer not to say") / len(genders))

# AGE
ages = [df.at[0, questions[2]] for df in DFs]
print("\n\nAge\n\tMean:", stat.mean(ages))
print("\tSD:", stat.stdev(ages))

# EXPERIENCE
experiences = [df.at[0, questions[3]] for df in DFs]
print("\n\nExperience\n\tMean:", stat.mean(experiences))
print("\tSD:", stat.stdev(experiences))

# FILLER CORRECTNESS
fillers = [df.iloc[:,104:129].at[0, questions[4]] for df in DFs]

# For the next questions, I only look at the NON-FILLER items
# CORRECTNESS
correctnesses = [df.iloc[:,4:104].at[0, questions[4]] for df in DFs]
print("\n\nCorrectness\n\tYes:", genders.count("Yes"), genders.count("Yes") / len(genders))
print("\tNo:", genders.count("No"), genders.count("No") / len(genders))

# CLARITY
clarities = [df.iloc[:,4:104].at[0, questions[6]] for df in DFs] 
#will this return multiple values bc multiple columns have this name?
print("\n\nClarity")

# FLUENCY
fluencies = [df.iloc[:,4:104].at[0, questions[7]] for df in DFs] 
#will this return multiple values bc multiple columns have this name?
print("\n\nFluency")

# POST-EDITS
edits = [df.iloc[:,4:104].at[0, questions[8]] for df in DFs] 
print("\n\nPost-edits")