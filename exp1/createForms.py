"""Write 20 Google Apps Script functions that generate different forms in 
Google Forms, results in folder `scripts`. The .gs files can be run from 
script.google.com. The batches of experimental items are written to folder 
`batches`."""

import pandas as pd

# Initialization
numberOfForms = 20      # The number of different forms to generate
numberOfItems = 25      # The number of experimental items

ggc_df = pd.read_csv("exp1-ggc-to-eng.csv", header=0, error_bad_lines=False, encoding="utf-8")
rg_df = pd.read_csv("exp1-rg-to-eng.csv", header=0, error_bad_lines=False, encoding="utf-8")
fillers_df = pd.read_csv("fillers.csv", header=0, error_bad_lines=False, sep=";", encoding="utf-8")

# The formula sets for each batch taken from the DataFrames
batches = []
for i in range(numberOfForms):
    ggc_10 = [tuple(ft) for ft in ggc_df.iloc[i*10:i*10+10, 3:5].to_numpy()]
    rg_10 = [tuple(ft) for ft in rg_df.iloc[i*10:i*10+10, 2:4].to_numpy()]
    fillers_5 = [tuple(ft) for ft in fillers_df.iloc[:5, 1:3].to_numpy() ]
    batch = ggc_10+rg_10+fillers_5
    pd.DataFrame(batch, columns = ["Formula", "Translation"]).to_csv(
        "batches/batch"+ str(i+1) + ".csv", sep=',')
    
    batches.append(batch)
    

# Lists of item variables
items = ['item'+str(n) for n in range(1, numberOfItems+1)]

scripts = []
for form_i in range(numberOfForms):
    script = []     # a list of lines to be part of the final script
    
    # open function
    script += [r'function main' + str(form_i+1) + r'() {']
    
    # copy form from template with UU theme and set title
    script += [r'var file = DriveApp.getFileById("1brt4qB9t1gXp4q93JaMCuNRmO22LRAb-CtPXK4mWp2k").makeCopy("1.' + str(form_i+1) + r' Evaluating English translations from First-Order Logic formulae");']
    script += [r'var form = FormApp.openById(file.getId());']
    script += [r'form.setTitle("1.' + str(form_i+1) + ' Evaluating English translations from First-Order Logic formulae");']
    script += ['']
    
    # instruction
    script += [r'form.setDescription("Thank you very much for participating in this experiment. Your response will be handled anonymously. It will take approximately 15 to 30 minutes to fill in this survey. If at any point you would like to stop, you can close this form and your response will be deleted.\n\nThe purpose of this experiment is to evaluate the strengths and weaknesses of a system that translates first-order logic formulas into English. We will present to you, one by one, 25 formulas with their translations, such as the one below:\n\n\tFormula:\t\t\t\t¬ ∃ x ( Cube ( x ) ∧ LeftOf ( b , v ) )\n\tEnglish translation:\t\tIt is not the case that b is left of some cube\n\nPlease answer the following questions for each of them:\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no? By a correct translation, we mean that the sentence conveys the same information as the input logical formula (there is no possible world in which the formula is true while the English translation is false, or vice versa). If you answer with \"no\", please explain why the translation is incorrect.\n2. Is the translation 𝗰𝗹𝗲𝗮𝗿? By a clear translation, we mean that the sentence is understandable and does not have multiple readings.\n3. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁? By a fluent translation, we mean that the sentence sounds like a natural English sentence.\n4. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻? Think, for example, about how the translation can be improved given the above three criteria (correctness, clarity, and fluency). However, you can be very free in your ideas here, write whatever you like! \n\nYour answer to the fourth question is most important for us. Especially if you think the given translation is unclear and/or influent, write down a translation that you think is more understandable and/or sounds better. \n\nIn answering all questions, please note that it is very important that you evaluate the quality of the translations and do not shape your opinion on the basis of the form or content of the formula. In other words, think about whether the translation is suitable given the formula, no matter what the formula looks like.\n\nThe survey will start off with a few personal questions and a practice example. After you have answered all of the questions for each formula and translation pair, you will be asked to give a general structured review of the strengths and weaknesses of the translation system. With which types of sentences does the system have difficulties? For which types of sentences do you believe the system performs sufficiently well? Please keep this final question in mind while evaluating the translations.\n\nFor your information, these are the interpretations of the predicates used:\nDodec ( x )\t\t\t\tx is a dodecahedron\nSmall ( x )\t\t\t\tx is small\nStudent ( x )\t\t\t\tx is a student\nMedium ( x )\t\t\t\tx is medium\nCube ( x )\t\t\t\tx is a cube\nPrime ( x )\t\t\t\tx is a prime\nPerson ( x )\t\t\t\tx is a person\nTet ( x )\t\t\t\t\tx is a tetrahedron\nPet ( x )\t\t\t\t\tx is a pet\nLarge ( x )\t\t\t\tx is large\nEven ( x )\t\t\t\tx is even\nAdjoins ( x , y )\t\t\tx is adjacent to y\nSameCol ( x , y )\t\t\tx is in the same column as y\nLeftOf ( x , y )\t\t\tx is left of y\nRightOf ( x , y )\t\t\tx is right of y\nSmaller ( x , y )\t\t\tx is smaller than y\nFrontOf ( x , y )\t\t\tx is in front of y\nLarger ( x , y )\t\t\tx is larger than y\nSameRow ( x , y )\t\tx is in the same row as y\nSameShape ( x , y )\t\tx is the same shape as y\nSameSize ( x , y )\t\t\tx is the same size as y\nBackOf ( x , y )\t\t\tx is in back of y\n");']
    
    # personal questions
    script += [r'form.addMultipleChoiceItem().setTitle("What is your gender?").setChoiceValues(["Male", "Female", "Prefer not to say"]).setRequired(true);']
    script += [r'form.addListItem().setTitle("How old are you?").setChoiceValues(["younger than 18", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "older than 40"]).setRequired(true);']
    script += [r'form.addScaleItem().setTitle("How would you rate your knowledge of and familiarity with first-order logic?").setBounds(1,5).setRequired(true);']
    script += ['']
    
    # two practice examples
    script += [r'var examples = form.addPageBreakItem().setTitle("Two examples").setHelpText("Here are two example formula-translation pairs with potential answers (but many more can be correct!) that would be helpful for us in thinking about how to improve the translation system:\n\nFormula:\t\t∀ x ∃ y ( ( LeftOf ( x , y ) ) ∧  ¬ Dodec ( y ) )\nTranslation:\t\tfor all x , there is an element y such that x is left of y and y is not a dodecahedron\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no?\n\t\"Yes\"\n\n2. If your answer to the previous question was \"no\", explain why the translation is incorrect.\n\t(Unanswered)\n\n3. Is the translation 𝗰𝗹𝗲𝗮𝗿, on a scale of 1 to 5?\n\t\"3\"\n\n4. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁, on a scale of 1 to 5?\n\t\"2\"\n\n5. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻?\n\t\"everything has something right of it that is not a dodecahedron\"\n\n\nFormula:\t\t¬ ( Pet ( a ) → ∃ x1 Adjoins ( x2 , x2 ) )\nTranslation:\t\tit is not the case that if a is a pet , then there is an element x1 such that x1 is adjacent to x2\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no?\n\t\"No\"\n\n2. If your answer to the previous question was \"no\", explain why the translation is incorrect.\n\t\"The translation of the predicate Adjoins ( x2, x2 ) is incorrect: the first variable is wrongly translated as x1.\"\n\n3. Is the translation 𝗰𝗹𝗲𝗮𝗿, on a scale of 1 to 5?\n\t\"3\"\n\n4. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁, on a scale of 1 to 5?\n\t\"1\"\n\n5. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻?\n\t\"either a is a pet or x2 is not adjacent to itself\"\n\n\nNow it is your turn!");']
    script += ['']
    
    # the questions per section (each section has one experimental item)
    for item_i in range(numberOfItems):
        script += [r'var ' + items[item_i] + r' = form.addPageBreakItem().setHelpText("Formula:\n'+ batches[form_i][item_i][0] +r'\n\nTranslation:\n'+ batches[form_i][item_i][1] +r'");']
        script += [r'form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);']
        script += [r'form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");']
        script += [r'form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);']
        script += [r'form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);']
        script += [r'form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");']
        script += ['']
    
    # final questions
    script += ['']
    script += [r'final = form.addPageBreakItem().setTitle("Final questions");']
    script += [r'form.addParagraphTextItem().setTitle("Give a general structured review of the strengths and weaknesses of the translation system. With which types of formulas does the system have difficulties? For which types of formulas do you believe the system performs sufficiently well?").setRequired(true);']
    script += [r'form.addParagraphTextItem().setTitle("Do you have any final comments?");']
    script += ['']
    
    # Shuffle order view of sections for participants
    shuffled = ['item4', 'item22', 'item21', 'item19', 'item11', 'item15', 'item23', 
         'item16', 'item6', 'item3', 'item25', 'item5', 'item18', 'item12', 
         'item2', 'item20', 'item10', 'final', 'item14', 'item8',
         'item13', 'item24', 'item17', 'item7', 'item9', 'item1']
    for item_i in range(numberOfItems):
        script += [items[item_i] + r'.setGoToPage('+ shuffled[item_i] + r')']
    script += [r'final.setGoToPage(' + shuffled[-1] + r')']
    
    # close function
    script += [r'}']
    
    scripts.append(script)
        
for script_i in range(numberOfForms):
    with open('scripts/script'+str(script_i+1)+'.gs', 'w', encoding="utf-8") as f:
        f.writelines("%s\n" % l for l in scripts[script_i])