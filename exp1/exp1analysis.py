import pandas as pd

# PREPROCESSING
df = pd.read_csv("exp1results.tsv", sep="\t", header=0).transpose()

sectionNumbers = [" "] + [[n]*5 for n in range(2,47)] + [" ", " "]
sectionNumbers = [item for sublist in sectionNumbers for item in sublist] #flattening
    
df.insert(0, "Section number", sectionNumbers)

csv = df.to_csv(r'exp1results.csv', sep=',')

