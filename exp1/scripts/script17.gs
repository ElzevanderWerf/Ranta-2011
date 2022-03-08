function main17() {
var file = DriveApp.getFileById("1brt4qB9t1gXp4q93JaMCuNRmO22LRAb-CtPXK4mWp2k").makeCopy("1.17 Evaluating English translations from First-Order Logic formulae");
var form = FormApp.openById(file.getId());
form.setTitle("1.17 Evaluating English translations from First-Order Logic formulae");

form.setDescription("Thank you very much for participating in this experiment. It will take approximately 15 to 30 minutes to fill in this survey. If at any point you would like to stop, you can close this form and your response will be deleted. If you do wish to participate, your response will be handled anonymously: The information in this study will only be used in ways that will not reveal who you are. You will not be identified in any publication from this study or in any data files shared with other researchers. Your participation in this study is confidential. \n\nThe purpose of this experiment is to evaluate the strengths and weaknesses of a system that translates first-order logic formulas into English. We will present to you, one by one, 25 formulas with their translations, such as the one below:\n\n\tFormula:\t\t\t\t¬ ∃ x ( Cube ( x ) ∧ LeftOf ( b , v ) )\n\tEnglish translation:\t\tIt is not the case that b is to the left of some cube\n\nPlease answer the following questions for each of them:\n\t1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no? By a correct translation, we mean that the sentence conveys the same information as the input logical formula (there is no possible world in which the formula is true while the English translation is false, or vice versa). If you answer with \"no\", please explain why the translation is incorrect.\n\t2. Is the translation 𝗰𝗹𝗲𝗮𝗿? By a clear translation, we mean that the sentence is understandable and does not have multiple readings.\n\t3. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁? By a fluent translation, we mean that the sentence sounds like a natural English sentence.\n\t4. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻? Think, for example, about how the translation can be improved given the above three criteria (correctness, clarity, and fluency). However, you can be very free in your ideas here, write whatever you like! \n\nYour answer to the fourth question is most important for us. Especially if you think the given translation is unclear and/or not fluent, write down a translation that you think is more understandable and/or sounds better. \n\nIn answering all questions, please note that it is very important that you evaluate the quality of the translations and base your opinion only on the semantic content (the meaning) of the formula, not on its specific syntactic form (such as the order of the conjuncts). In other words, think about whether the translation is suitable given the formula, no matter what the formula looks like.\n\nThe survey will start off with a few personal questions and a practice example. After you have answered all of the questions for each formula and translation pair, you will be asked to give a general structured review of the strengths and weaknesses of the translation system. With which types of sentences does the system have difficulties? For which types of sentences do you believe the system performs sufficiently well? Please keep this final question in mind while evaluating the translations.\n\nFor your information, these are the interpretations of the predicates used:\nDodec ( x )\t\t\t\tx is a dodecahedron\nSmall ( x )\t\t\t\tx is small\nStudent ( x )\t\t\t\tx is a student\nMedium ( x )\t\t\t\tx is medium\nCube ( x )\t\t\t\tx is a cube\nPrime ( x )\t\t\t\tx is a prime\nPerson ( x )\t\t\t\tx is a person\nTet ( x )\t\t\t\t\tx is a tetrahedron\nPet ( x )\t\t\t\t\tx is a pet\nLarge ( x )\t\t\t\tx is large\nEven ( x )\t\t\t\tx is even\nAdjoins ( x , y )\t\t\tx is adjacent to y\nSameCol ( x , y )\t\t\tx is in the same column as y\nLeftOf ( x , y )\t\t\tx is to the left of y\nRightOf ( x , y )\t\t\tx is to the right of y\nSmaller ( x , y )\t\t\tx is smaller than y\nFrontOf ( x , y )\t\t\tx is in front of y\nLarger ( x , y )\t\t\tx is larger than y\nSameRow ( x , y )\t\tx is in the same row as y\nSameShape ( x , y )\t\tx is the same shape as y\nSameSize ( x , y )\t\t\tx is the same size as y\nBackOf ( x , y )\t\t\tx is in back of y\n");
informedConsent = form.addMultipleChoiceItem().setTitle("I have read the above information and understand the purpose of the research and that data will be collected from me. I also understand that participating in this study is completely voluntary. I agree that data gathered for the study may be published or made available provided my name or other identifying information is not used.").setRequired(true);
var withDrawn = form.addPageBreakItem().setTitle("Withdrawn from participation").setHelpText("You are withdrawn from participation. You can close this window and your response will not be recorded.");
var personalQs = form.addPageBreakItem().setTitle("Personal questions");
var agreed = informedConsent.createChoice("I confirm this", personalQs);
var disagreed = informedConsent.createChoice("I do not confirm this and want to withdraw from participation.", withDrawn);
informedConsent.setChoices([agreed, disagreed]);

form.addMultipleChoiceItem().setTitle("What is your gender?").setChoiceValues(["Male", "Female", "Prefer not to say"]).setRequired(true);
var ageValidation = FormApp.createTextValidation().setHelpText("Your answer should be a whole number greater than 0.").requireNumberGreaterThan(0).requireWholeNumber().build();
form.addTextItem().setTitle("How old are you?").setRequired(true).setValidation(ageValidation);
form.addScaleItem().setTitle("How would you rate your knowledge of and familiarity with first-order logic?").setBounds(1,5).setRequired(true);

var examples = form.addPageBreakItem().setTitle("Two examples").setHelpText("Here are two example formula-translation pairs with potential answers (but many more can be correct!) that would be helpful for us in thinking about how to improve the translation system:\n\n𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭\n\nFormula:\t\t∀ x ∃ y ( ( LeftOf ( x , y ) ) ∧  ¬ Dodec ( y ) )\nTranslation:\t\tfor all x , there is an element y such that x is to the left of y and y is not a dodecahedron\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no?\n\t\"Yes\"\n\n2. If your answer to the previous question was \"no\", explain why the translation is incorrect.\n\t(Unanswered)\n\n3. Is the translation 𝗰𝗹𝗲𝗮𝗿, on a scale of 1 to 5?\n\t\"3\"\n\n4. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁, on a scale of 1 to 5?\n\t\"2\"\n\n5. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻?\n\t\"everything has something to the right of it that is not a dodecahedron\"\n\n\n𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮\n\nFormula:\t\t¬ ( Pet ( a ) → ∃ x1 Adjoins ( x2 , x2 ) )\nTranslation:\t\tit is not the case that if a is a pet , then there is an element x1 such that x1 is adjacent to x2\n1. Is the translation 𝗰𝗼𝗿𝗿𝗲𝗰𝘁, yes or no?\n\t\"No\"\n\n2. If your answer to the previous question was \"no\", explain why the translation is incorrect.\n\t\"The translation of the predicate Adjoins ( x2, x2 ) is incorrect: the first variable is wrongly translated as x1.\"\n\n3. Is the translation 𝗰𝗹𝗲𝗮𝗿, on a scale of 1 to 5?\n\t\"3\"\n\n4. Is the translation 𝗳𝗹𝘂𝗲𝗻𝘁, on a scale of 1 to 5?\n\t\"1\"\n\n5. Do you have a suggestion for a 𝗯𝗲𝘁𝘁𝗲𝗿 𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗶𝗼𝗻?\n\t\"either a is a pet or x2 is not adjacent to itself\"\n\n\nNow it is your turn!");

var item1 = form.addPageBreakItem().setHelpText("Formula:\n¬ ( ( Larger ( a , c ) ∧ Larger ( e , c ) ) → ¬ ( ¬ Large ( a ) ∧ ¬ Large ( e ) ) )\n\nTranslation:\nit is not the case that if a and e are larger than c , then it is not the case that a is not large and e is not large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item2 = form.addPageBreakItem().setHelpText("Formula:\n∃ v ( Dodec ( v ) ∧ Large ( v ) )\n\nTranslation:\nsome dodecahedron is large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item3 = form.addPageBreakItem().setHelpText("Formula:\n∀ x ( LeftOf ( x , a ) → ¬ Cube ( x ) )\n\nTranslation:\nfor all x , if x is to the left of a , then x is not a cube");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item4 = form.addPageBreakItem().setHelpText("Formula:\n∃ x ( Cube ( x ) ∧ Large ( x ) ∧ ∃ v ( Cube ( v ) ∧ Small ( v ) ∧ FrontOf ( x , v ) ) )\n\nTranslation:\nthere is an element x such that x is a cube , x is large and there is an element v such that v is a cube , v is small and x is in front of v");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item5 = form.addPageBreakItem().setHelpText("Formula:\n∀ y ∀ x ( Cube ( y ) → ( ( Dodec ( x ) ∧ BackOf ( y , x ) ) → Smaller ( y , x ) ) )\n\nTranslation:\nfor all y , for all x , if y is a cube , then if x is a dodecahedron and y is in back of x , then y is smaller than x");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item6 = form.addPageBreakItem().setHelpText("Formula:\n∀ x ( ( Small ( x ) ∧ Cube ( x ) ) → ∃ w BackOf ( x , w ) )\n\nTranslation:\nfor all x , if x is small and x is a cube , then there is an element w such that x is in back of w");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item7 = form.addPageBreakItem().setHelpText("Formula:\n∀ y ∀ x ( ( Cube ( y ) ∧ Large ( y ) ∧ RightOf ( x , y ) ) → Small ( x ) )\n\nTranslation:\nfor all y , for all x , if y is a cube , y is large and x is to the right of y , then x is small");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item8 = form.addPageBreakItem().setHelpText("Formula:\n∀ x ¬ ∃ y ( Cube ( x ) ∧ Cube ( y ) ∧ RightOf ( x , y ) )\n\nTranslation:\nfor all x , it is not the case that there is an element y such that x is a cube , y is a cube and x is to the right of y");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item9 = form.addPageBreakItem().setHelpText("Formula:\n∀ y ¬ ( Small ( y ) ∧ Dodec ( y ) )\n\nTranslation:\nfor all y , it is not the case that y is small and y is a dodecahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item10 = form.addPageBreakItem().setHelpText("Formula:\n∀ x ∀ y ( ( Cube ( y ) ∧ LeftOf ( x , y ) ∧ Dodec ( x ) ) → Large ( x ) )\n\nTranslation:\nfor all x , for all y , if y is a cube , x is to the left of y and x is a dodecahedron , then x is large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item11 = form.addPageBreakItem().setHelpText("Formula:\n∃ x1 ∀ x1 ∀ x2 FrontOf ( x2 , x2 )\n\nTranslation:\nthere is an element x1 such that for all x1 , for all x2 , x2 is in front of itself");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item12 = form.addPageBreakItem().setHelpText("Formula:\n∃ x1 ∃ x2 BackOf ( a , x1 )\n\nTranslation:\nthere is an element x1 such that there is an element x2 such that a is in back of x1");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item13 = form.addPageBreakItem().setHelpText("Formula:\n∃ x1 SameSize ( x1 , a )\n\nTranslation:\nthere is an element x1 such that x1 is of the same size as a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item14 = form.addPageBreakItem().setHelpText("Formula:\n∀ x1 ( ( Tet ( x1 ) ∧ Adjoins ( a , b ) ) ∧ ∃ x1 Tet ( a ) )\n\nTranslation:\nfor all x1 , x1 is a tetrahedron , a is adjacent to b and there is an element x1 such that a is a tetrahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item15 = form.addPageBreakItem().setHelpText("Formula:\n( LeftOf ( a , a ) → ( Small ( a ) ∨ Even ( b ) ) ) ∧ ¬ Larger ( c , b )\n\nTranslation:\nall these hold : \item if a is to the left of itself , then a is small or b is even \item c is not larger than b");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item16 = form.addPageBreakItem().setHelpText("Formula:\n∀ x1 ( Medium ( x1 ) ∨ Pet ( x1 ) ) ∧ ∀ x2 ( Larger ( a , x2 ) ∧ BackOf ( x2 , x2 ) )\n\nTranslation:\nfor all x1 , x1 is medium or x1 is a pet and for all x2 , a is larger than x2 and x2 is in back of itself");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item17 = form.addPageBreakItem().setHelpText("Formula:\n( ∃ x1 Medium ( x1 ) ∨ ∀ x1 Dodec ( x1 ) ) → Tet ( a )\n\nTranslation:\nif there is an element x1 such that x1 is medium or for all x1 , x1 is a dodecahedron , then a is a tetrahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item18 = form.addPageBreakItem().setHelpText("Formula:\nFrontOf ( a , a ) ∧ ¬ ¬ Medium ( a )\n\nTranslation:\na is in front of itself and it is not the case that a is not medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item19 = form.addPageBreakItem().setHelpText("Formula:\nStudent ( a ) ∨ ( ( Large ( a ) ∧ Smaller ( a , a ) ) → ( Tet ( b ) → Even ( c ) ) )\n\nTranslation:\nat least one of these holds : \item a is a student \item if a is large and a is smaller than itself , then if b is a tetrahedron , then c is even");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item20 = form.addPageBreakItem().setHelpText("Formula:\nLeftOf ( a , a ) ∧ ¬ ¬ Even ( b )\n\nTranslation:\na is to the left of itself and it is not the case that b is not even");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item21 = form.addPageBreakItem().setHelpText("Formula:\n¬ ∃ x1 ( SameShape ( a , b ) → SameRow ( x2 , x2 ) )\n\nTranslation:\nit is not the case that there is an element x1 such that a is in the same shape as b and x2 is in the same row as itself");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item22 = form.addPageBreakItem().setHelpText("Formula:\n∀ x1 ( Tet ( x1 ) ∨ Prime ( x2 ) ) ∨ ∃ x1 ( Person ( x1 ) → Student ( x2 ) )\n\nTranslation:\nfor all x1 , x1 is a tetrahedron or x2 is a prime or there is an element x1 such that x2 is a student");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item23 = form.addPageBreakItem().setHelpText("Formula:\n∃ x1 ∀ x2 Larger ( x1 , a ) ∧ ∀ x2 ¬ Pet ( x3 )\n\nTranslation:\nthere is an element x1 such that for all x2 , x1 is larger than a and there is an element x1 such that for all x2 , x3 is not a pet");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item24 = form.addPageBreakItem().setHelpText("Formula:\n∃ x1 ( ( ( SameShape ( x1 , a ) ∧ Tet ( x1 ) ) → Adjoins ( x1 , a ) )\n\nTranslation:\nfor all x1 , if x1 is of the same shape as a, then x1 is adjacent to a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item25 = form.addPageBreakItem().setHelpText("Formula:\n∃ x1 Cube ( x1 ) ( Person ( a ) → Adjoins ( x1 , a ) )\n\nTranslation:\nthere is a cube such that a is a person or x1 is adjacent to a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("𝘾𝙤𝙧𝙧𝙚𝙘𝙩 means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addParagraphTextItem().setTitle("If your answer to the previous question was \"no\", explain why the translation is incorrect.");
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("𝘾𝙡𝙚𝙖𝙧 means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("𝙁𝙡𝙪𝙚𝙣𝙩 means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");


final = form.addPageBreakItem().setTitle("Final questions");
form.addParagraphTextItem().setTitle("Give a general structured review of the strengths and weaknesses of the translation system. With which types of formulas does the system have difficulties? For which types of formulas do you believe the system performs sufficiently well?").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have any final comments?");

item1.setGoToPage(item4)
item2.setGoToPage(item22)
item3.setGoToPage(item21)
item4.setGoToPage(item19)
item5.setGoToPage(item11)
item6.setGoToPage(item15)
item7.setGoToPage(item23)
item8.setGoToPage(item16)
item9.setGoToPage(item6)
item10.setGoToPage(item3)
item11.setGoToPage(item25)
item12.setGoToPage(item5)
item13.setGoToPage(item18)
item14.setGoToPage(item12)
item15.setGoToPage(item2)
item16.setGoToPage(item20)
item17.setGoToPage(item10)
item18.setGoToPage(final)
item19.setGoToPage(item14)
item20.setGoToPage(item8)
item21.setGoToPage(item13)
item22.setGoToPage(item24)
item23.setGoToPage(item17)
item24.setGoToPage(item7)
item25.setGoToPage(item9)
final.setGoToPage(item1)

var ss = SpreadsheetApp.create("1.17 results");
form.setConfirmationMessage("Thank you very much! Your response has been recorded.").setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId()).setShowLinkToRespondAgain(false);
}
