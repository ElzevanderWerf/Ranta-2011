function main() {
var form = FormApp.create("1.3 Evaluating English translations from First-Order Logic formulae");
form.setDescription("Thank you very much for participating in this experiment. Your response will be handled anonymously. It will take approximately 15 to 30 minutes to fill in this survey. If at any point you would like to stop, you can close this form and your response will be deleted.\n\nThe purpose of this experiment is to evaluate the strengths and weaknesses of a system that translates first-order logic formulas into English. We will present to you, one by one, 25 formulas with their translations, such as the one below:\n\n\tFormula:\t\t¬ ∃ x ( Cube ( x ) ∧ LeftOf ( b , v ) )\n\tEnglish translation:\t\tIt is not the case that b is left of some cube\n\nPlease answer the following questions for each of them:\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no? By a correct translation, we mean that the sentence conveys the same information as the input logical formula (there is no possible world in which the formula is true while the English translation is false, or vice versa). If you answer with \"no\", please explain why the translation is incorrect.\n2. Is the translation 𝗰𝗹𝗲𝗮𝗿? By a clear translation, we mean that the sentence is understandable and does not have multiple readings.\n3. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁? By a fluent translation, we mean that the sentence sounds like a natural English sentence.\n4. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻? Think, for example, about how the translation can be improved given the above three criteria (correctness, clarity, and fluency). However, you can be very free in your ideas here, write whatever you like! \n\nYour answer to the fourth question is most important for us. Especially if you think the given translation is unclear and/or influent, write down a translation that you think is more understandable and/or sounds better. \n\nIn answering all questions, please note that it is very important that you evaluate the quality of the translations and do not shape your opinion on the basis of the form or content of the formula. In other words, think about whether the translation is suitable given the formula, no matter what the formula looks like.\n\nThe survey will start off with a few personal questions and a practice example. After you have answered all of the questions for each formula and translation pair, you will be asked to give a general structured review of the strengths and weaknesses of the translation system. With which types of sentences does the system have difficulties? For which types of sentences do you believe the system performs sufficiently well? Please keep this final question in mind while evaluating the translations.\n\nFor your information, these are the interpretations of the predicates used:\nDodec ( x )\t\t\t\tx is a dodecahedron\nSmall ( x )\t\t\t\tx is small\nStudent ( x )\t\t\t\tx is a student\nMedium ( x )\t\t\t\tx is medium\nCube ( x )\t\t\t\tx is a cube\nPrime ( x )\t\t\t\tx is a prime\nPerson ( x )\t\t\t\tx is a person\nTet ( x )\t\t\t\t\tx is a tetrahedron\nPet ( x )\t\t\t\t\tx is a pet\nLarge ( x )\t\t\t\tx is large\nEven ( x )\t\t\t\tx is even\nAdjoins ( x , y )\t\t\tx is adjacent to y\nSameCol ( x , y )\t\t\tx is in the same column as y\nLeftOf ( x , y )\t\t\tx is left of y\nRightOf ( x , y )\t\t\tx is right of y\nSmaller ( x , y )\t\t\tx is smaller than y\nFrontOf ( x , y )\t\t\tx is in front of y\nLarger ( x , y )\t\t\tx is larger than y\nSameRow ( x , y )\t\tx is in the same row as y\nSameShape ( x , y )\t\tx is the same shape as y\nSameSize ( x , y )\t\t\tx is the same size as y\nBackOf ( x , y )\t\t\tx is in back of y\n");
form.addMultipleChoiceItem().setTitle("What is your gender?").setChoiceValues(["Male", "Female", "Prefer not to say"]).setRequired(true);
form.addListItem().setTitle("How old are you?").setChoiceValues(["younger than 18", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "older than 40"]).setRequired(true);
form.addScaleItem().setTitle("How would you rate your knowledge of and familiarity with first-order logic?").setBounds(1,5).setRequired(true);

var item1 = form.addPageBreakItem();
var item2 = form.addPageBreakItem();
var item3 = form.addPageBreakItem();
var item4 = form.addPageBreakItem();
var item5 = form.addPageBreakItem();
var item6 = form.addPageBreakItem();
var item7 = form.addPageBreakItem();
var item8 = form.addPageBreakItem();
var item9 = form.addPageBreakItem();
var item10 = form.addPageBreakItem();
var item11 = form.addPageBreakItem();
var item12 = form.addPageBreakItem();
var item13 = form.addPageBreakItem();
var item14 = form.addPageBreakItem();
var item15 = form.addPageBreakItem();
var item16 = form.addPageBreakItem();
var item17 = form.addPageBreakItem();
var item18 = form.addPageBreakItem();
var item19 = form.addPageBreakItem();
var item20 = form.addPageBreakItem();
var item21 = form.addPageBreakItem();
var item22 = form.addPageBreakItem();
var item23 = form.addPageBreakItem();
var item24 = form.addPageBreakItem();
var item25 = form.addPageBreakItem();
var final = form.addPageBreakItem();

var examples = form.addPageBreakItem().setGoToPage(item19).setTitle("Two examples").setHelpText("Here are two example formula-translation pairs with potential answers that would be helpful for us in thinking about how to improve the translation system:\n\nFormula:\t\t<formula>\nTranslation:\t\t<translation>\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no?\n\t<answer>\n\n2. If your answer to the previous question was \"no\", explain why the translation is incorrect.\n\t<answer>\n\n3. Is the translation 𝗰𝗹𝗲𝗮𝗿, on a scale of 1 to 5?\n\t<answer>\n\n4. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁, on a scale of 1 to 5?\n\t<answer>\n\n5. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻?\n\t<answer>\n\n\nFormula:\t\t<formula>\nTranslation:\t\t<translation>\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no?\n\t<answer>\n\n2. If your answer to the previous question was \"no\", explain why the translation is incorrect.\n\t<answer>\n\n3. Is the translation 𝗰𝗹𝗲𝗮𝗿, on a scale of 1 to 5?\n\t<answer>\n\n4. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁, on a scale of 1 to 5?\n\t<answer>\n\n5. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻?\n\t<answer>\n\n\nNow it is your turn!");

item1.setGoToPage(item9).setHelpText("Formula:\n∃ w ( Dodec ( w ) ∧ ¬ Small ( w ) )\n\nTranslation:\nthere is a dodecahedron w such that w is not small");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item2.setGoToPage(item1).setHelpText("Formula:\n∃ x ∀ y ( Cube ( y ) → BackOf ( x , y ) )\n\nTranslation:\nthere is an element x such that x is in back of every cube");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item3.setGoToPage(item2).setHelpText("Formula:\n∀ x ∀ z ( ( Tet ( x ) ∧ Cube ( z ) ) → ¬ SameSize ( z , x ) )\n\nTranslation:\nfor all x , for all z , if x is a tetrahedron and z is a cube , then z is not the same size as x");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item4.setGoToPage(item23).setHelpText("Formula:\n∀ x ∀ y ( ( Cube ( y ) ∧ SameSize ( x , y ) ) → ¬ Tet ( x ) )\n\nTranslation:\nfor all x , for all y , if y is a cube and x is the same size as y , then x is not a tetrahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item5.setGoToPage(item10).setHelpText("Formula:\n∀ u ( Cube ( u ) → ¬ ( SameCol ( a , u ) ∨ SameCol ( b , u ) ) )\n\nTranslation:\nfor all cubes u , it is not the case that a or b is in the same column as u");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item6.setGoToPage(item25).setHelpText("Formula:\n¬ ∃ x ( ¬ LeftOf ( x , a ) ∧ LeftOf ( x , b ) ) ∧ ¬ ∃ x ( ¬ LeftOf ( x , b ) ∧ LeftOf ( x , a ) )\n\nTranslation:\nit is not the case that there is an element x such that x is not left of a and x is left of b and it is not the case that there is an element x such that x is not left of b and x is left of a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item7.setGoToPage(item6).setHelpText("Formula:\n∀ x ( ( LeftOf ( x , b ) → LeftOf ( x , a ) ) ∧ ∀ y ( LeftOf ( y , a ) → LeftOf ( y , b ) ) )\n\nTranslation:\nfor all x , all these hold : \item if x is left of b , then x is left of a \item for all y , if y is left of a , then y is left of b");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item8.setGoToPage(item4).setHelpText("Formula:\n∀ x ( ( Tet ( x ) ∧ Small ( x ) ) ∨ ¬ Tet ( x ) )\n\nTranslation:\nfor all x , at least one of these holds : \item x is a tetrahedron and x is small \item x is not a tetrahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item9.setGoToPage(item17).setHelpText("Formula:\n∀ x ∀ y ( ( Cube ( x ) ∧ Cube ( y ) ) → ( ¬ RightOf ( x , y ) ∧ ¬ LeftOf ( y , x ) ) )\n\nTranslation:\nfor all x , for all y , if x is a cube and y is a cube , then x is not right of y and y is not left of x");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item10.setGoToPage(item22).setHelpText("Formula:\n¬ ( FrontOf ( d , c ) ∨ FrontOf ( c , b ) ∨ FrontOf ( d , b ) ∨ FrontOf ( d , c ) )\n\nTranslation:\nit is not the case that d is in front of c , c is in front of b , d is in front of b or d is in front of c");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item11.setGoToPage(item8).setHelpText("Formula:\n∃ x1 ∀ x1 ∀ x2 Large ( a )\n\nTranslation:\nthere is an element x1 such that for all x1 , for all x2 , a is large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item12.setGoToPage(item5).setHelpText("Formula:\n∃ x1 ( ( SameSize ( a , a ) → Student ( x1 ) ) ∨ Even ( b ) )\n\nTranslation:\nthere is an element x1 such that at least one of these holds : \item if a is of the same size as itself , then x1 is a student \item b is even");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item13.setGoToPage(item3).setHelpText("Formula:\n∀ x1 ∀ x1 SameRow ( a , b )\n\nTranslation:\nfor all x1 , for all x1 , a is in the same row as b");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item14.setGoToPage(item7).setHelpText("Formula:\nSameSize ( a , x1 ) ∨ ∀ x1 Medium ( x1 )\n\nTranslation:\na is of the same size as x1 or for all x1 , x1 is medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item15.setGoToPage(item20).setHelpText("Formula:\n¬ ∀ x1 ( SameCol ( a , x1 ) ∧ Pet ( b ) )\n\nTranslation:\nit is not the case that for all x1 , a is in the same column as x1 and b is a pet");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item16.setGoToPage(item18).setHelpText("Formula:\n∀ x1 ( ∃ x1 Medium ( a ) ∧ ¬ Small ( x2 ) )\n\nTranslation:\nfor all x1 , there is an element x1 such that a is medium and x2 is not small");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item17.setGoToPage(item12).setHelpText("Formula:\n∀ x1 ∃ x2 ∃ x1 Small ( a )\n\nTranslation:\nfor all x1 , there is an element x2 such that there is an element x1 such that a is small");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item18.setGoToPage(item11).setHelpText("Formula:\n∀ x1 ∀ x2 SameShape ( x3 , a ) ∧ ∃ x1 ( Person ( b ) ∨ LeftOf ( x4 , a ) )\n\nTranslation:\nfor all x1 , for all x2 , x3 is of the same shape as a and there is an element x1 such that b is a person or x4 is to the left of a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item19.setGoToPage(item24).setHelpText("Formula:\n¬ ∀ x1 ∀ x2 Person ( x3 )\n\nTranslation:\nit is not the case that for all x1 , for all x2 , x3 is a person");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item20.setGoToPage(item13).setHelpText("Formula:\n¬ ¬ ( LeftOf ( x1 , x1 ) → Person ( x2 ) )\n\nTranslation:\nit is not the case that it is not the case that if x1 is to the left of itself , then x2 is a person");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item21.setGoToPage(item16).setHelpText("Formula:\n~ / x1 ( SameShape ( a , b ) $ SameRow ( x2 , x2 ) )\n\nTranslation:\nit is not the case that there is an element x1 such that a is in the same shape as b and x2 is in the same row as itself");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item22.setGoToPage(item14).setHelpText("Formula:\n@ x1 ( Tet ( x1 ) | Prime ( x2 ) ) | / x1 ( Person ( x1 ) $ Student ( x2 ) )\n\nTranslation:\nfor all x1 , x1 is a tetrahedron or x2 is a prime or there is an element x1 such that x2 is a student");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item23.setGoToPage(item15).setHelpText("Formula:\n/ x1 @ x2 Larger ( x1 , a ) & @ x2 ~ Pet ( x3 )\n\nTranslation:\nthere is an element x1 such that for all x2 , x1 is larger than a and there is an element x1 such that for all x2 , x3 is not a pet");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item24.setGoToPage(item21).setHelpText("Formula:\n/ x1 ( ( ( SameShape ( x1 , a ) & Tet ( x1 ) ) $ Adjoins ( x1 , a ) )\n\nTranslation:\nfor all x1 , if x1 is of the same shape as a, then x1 is adjacent to a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

item25.setGoToPage(final).setHelpText("Formula:\n/ x1 Cube ( x1 ) ( Person ( a ) $ Adjoins ( x1 , a ) )\n\nTranslation:\nthere is a cube such that a is a person or x1 is adjacent to a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Very influent", "Very fluent").setRequired(true);
form.addTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");


final.setTitle("Final questions");
form.addParagraphTextItem().setTitle("Give a general structured review of the strengths and weaknesses of the translation system. With which types of formulas does the system have difficulties? For which types of formulas do you believe the system performs sufficiently well?").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have any final comments?");
}
