function main14() {
var file = DriveApp.getFileById("1brt4qB9t1gXp4q93JaMCuNRmO22LRAb-CtPXK4mWp2k").makeCopy("1.14 Evaluating English translations from First-Order Logic formulae");
var form = FormApp.openById(file.getId());
form.setTitle("1.14 Evaluating English translations from First-Order Logic formulae");

form.setDescription("Thank you very much for participating in this experiment. It will take approximately 15 to 30 minutes to fill in this survey. If at any point you would like to stop, you can close this form and your response will be deleted. If you do wish to participate, your response will be handled anonymously: The information in this study will only be used in ways that will not reveal who you are. You will not be identified in any publication from this study or in any data files shared with other researchers. Your participation in this study is confidential. \n\nThe purpose of this experiment is to evaluate the strengths and weaknesses of a system that translates first-order logic formulas into English. We will present to you, one by one, 25 formulas with their translations, such as the one below:\n\n\tFormula:\t\t\t\tÂ¬ â x ( Cube ( x ) â§ LeftOf ( b , x ) )\n\tEnglish translation:\t\tIt is not the case that b is to the left of some cube\n\nPlease answer the following questions for each of them:\n\t1. Is the translation ğ°ğ¼ğ¿ğ¿ğ²ğ°ğ, yes or no? By a correct translation, we mean that the sentence conveys the same information as the input logical formula (there is no possible world in which the formula is true while the English translation is false, or vice versa).\n\t2. Is the translation ğ°ğ¹ğ²ğ®ğ¿? By a clear translation, we mean that the sentence is understandable and does not have multiple readings.\n\t3. Is the translation ğ³ğ¹ğğ²ğ»ğ? By a fluent translation, we mean that the sentence sounds like a natural English sentence.\n\t4. Do you have a suggestion for a ğ¯ğ²ğğğ²ğ¿ ğğ¿ğ®ğ»ğğ¹ğ®ğğ¶ğ¼ğ»? Think, for example, about how the translation can be improved given the above three criteria (correctness, clarity, and fluency). However, you can be very free in your ideas here, write whatever you like! \n\nğ¬ğ¼ğğ¿ ğ®ğ»ğğğ²ğ¿ ğğ¼ ğ¾ğğ²ğğğ¶ğ¼ğ» ğ° ğ¶ğ ğºğ¼ğğ ğ¶ğºğ½ğ¼ğ¿ğğ®ğ»ğ ğ³ğ¼ğ¿ ğğ. Especially if you think the given translation is unclear and/or not fluent, write down a translation that you think is more understandable and/or sounds better. A translation should always be one or more whole sentences.\n\nIn answering all questions, please note that it is very important that you evaluate the quality of the translations and base your opinion only on the semantic content (the meaning) of the formula, not on its specific syntactic form (such as the order of the conjuncts). In other words, think about whether the translation is suitable given the formula\'s meaning, no matter what the formula looks like.\n\nThe survey will start off with a few personal questions and a practice example. After you have answered all of the questions for each formula and translation pair, you will be asked to give a general structured review of the strengths and weaknesses of the translation system. With which types of sentences does the system have difficulties? For which types of sentences do you believe the system performs sufficiently well? Please keep this final question in mind while evaluating the translations.\n\nFor your information, these are the interpretations of the predicates used:\nDodec ( x )\t\t\t\tx is a dodecahedron\nSmall ( x )\t\t\t\tx is small\nStudent ( x )\t\t\t\tx is a student\nMedium ( x )\t\t\t\tx is medium\nCube ( x )\t\t\t\tx is a cube\nPrime ( x )\t\t\t\tx is a prime\nPerson ( x )\t\t\t\tx is a person\nTet ( x )\t\t\t\t\tx is a tetrahedron\nPet ( x )\t\t\t\t\tx is a pet\nLarge ( x )\t\t\t\tx is large\nEven ( x )\t\t\t\tx is even\nAdjoins ( x , y )\t\t\tx is adjacent to y\nSameCol ( x , y )\t\t\tx is in the same column as y\nLeftOf ( x , y )\t\t\tx is to the left of y\nRightOf ( x , y )\t\t\tx is to the right of y\nSmaller ( x , y )\t\t\tx is smaller than y\nFrontOf ( x , y )\t\t\tx is in front of y\nLarger ( x , y )\t\t\tx is larger than y\nSameRow ( x , y )\t\tx is in the same row as y\nSameShape ( x , y )\t\tx is the same shape as y\nSameSize ( x , y )\t\t\tx is the same size as y\nBackOf ( x , y )\t\t\tx is in back of y\n");
informedConsent = form.addMultipleChoiceItem().setTitle("I have read the above information and understand the purpose of the research and that data will be collected from me. I also understand that participating in this study is completely voluntary. I agree that data gathered for the study may be published or made available provided my name or other identifying information is not used.").setRequired(true);
var withDrawn = form.addPageBreakItem().setTitle("Withdrawn from participation").setHelpText("You are withdrawn from participation. You can close this window and your response will not be recorded.");
var personalQs = form.addPageBreakItem().setTitle("Personal questions");
var agreed = informedConsent.createChoice("I confirm this", personalQs);
var disagreed = informedConsent.createChoice("I do not confirm this and want to withdraw from participation", withDrawn);
informedConsent.setChoices([agreed, disagreed]);

form.addMultipleChoiceItem().setTitle("What is your gender?").setChoiceValues(["Male", "Female", "Prefer not to say"]).setRequired(true);
var ageValidation = FormApp.createTextValidation().setHelpText("Your answer should be a whole number greater than 0.").requireNumberGreaterThan(0).requireWholeNumber().build();
form.addTextItem().setTitle("How old are you?").setRequired(true).setValidation(ageValidation);
form.addScaleItem().setTitle("How would you rate your knowledge of and familiarity with first-order logic?").setBounds(1,5).setLabels("I have been introduced to logic but it is long ago and I am a bit rusty", "I use logic on a daily basis").setRequired(true);

var examples = form.addPageBreakItem().setTitle("Two examples").setHelpText("Here are two example formula-translation pairs with potential answers (but many more can be correct!) that would be helpful for us in thinking about how to improve the translation system:\n\nğğğ®ğºğ½ğ¹ğ² ğ­\n\nFormula:\t\tâ x â y ( ( LeftOf ( x , y ) ) â§  Â¬ Dodec ( y ) )\nTranslation:\t\tfor all x , there is an element y such that x is to the left of y and y is not a dodecahedron\n1. Is the translation ğ°ğ¼ğ¿ğ¿ğ²ğ°ğ, yes or no?\n\t\"Yes\"\n\n2. Is the translation ğ°ğ¹ğ²ğ®ğ¿, on a scale of 1 to 5?\n\t\"3\"\n\n3. Is the translation ğ³ğ¹ğğ²ğ»ğ, on a scale of 1 to 5?\n\t\"2\"\n\n4. Do you have a suggestion for a ğ¯ğ²ğğğ²ğ¿ ğğ¿ğ®ğ»ğğ¹ğ®ğğ¶ğ¼ğ»?\n\t\"everything has something to the right of it that is not a dodecahedron\"\n\n\nğğğ®ğºğ½ğ¹ğ² ğ®\n\nFormula:\t\tPet ( a ) â â x Adjoins ( b , b )\nTranslation:\t\tif a is a pet , then there is an element x such that x is adjacent to b\n1. Is the translation ğ°ğ¼ğ¿ğ¿ğ²ğ°ğ, yes or no?\n\t\"No\"\n\n2. Is the translation ğ°ğ¹ğ²ğ®ğ¿, on a scale of 1 to 5?\n\t\"3\"\n\n3. Is the translation ğ³ğ¹ğğ²ğ»ğ, on a scale of 1 to 5?\n\t\"1\"\n\n4. Do you have a suggestion for a ğ¯ğ²ğğğ²ğ¿ ğğ¿ğ®ğ»ğğ¹ğ®ğğ¶ğ¼ğ»?\n\t\"if a is a pet, then b is adjacent to itself\"\n\n\nNow it is your turn!");

var item1 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( Tet ( x ) â â y ( Â¬ Cube ( y ) â¨ Â¬ SameSize ( x , y ) ) )\n\nTranslation:\nfor all tetrahedrons x , for all y , y is not a cube or x is not of the same size as y");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item2 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ â x Â¬ ( Dodec ( x ) â â y ( Cube ( y ) â§ SameSize ( x , y ) ) )\n\nTranslation:\nit is not the case that there is an element x such that it is not the case that if x is a dodecahedron , then x is of the same size as some cube");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item3 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ Large ( a ) â§ Larger ( a , c ) â§ Larger ( e , c ) â§ Â¬ Large ( e )\n\nTranslation:\na is not large , a is larger than c , e is larger than c and e is not large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item4 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( Large ( x ) â§ Cube ( x ) â§ â z ( ( Small ( z ) â§ Cube ( z ) ) â BackOf ( z , x ) ) )\n\nTranslation:\nthere is an element x such that x is large , x is a cube and for all z , if z is small and z is a cube , then z is in back of x");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item5 = form.addPageBreakItem().setHelpText("Formula:\nâ z ( Cube ( z ) â¨ Tet ( z ) )\n\nTranslation:\nfor all z , z is a cube or z is a tetrahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item6 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ â x â y ( ( Tet ( x ) â§ Tet ( y ) ) â ( Â¬ RightOf ( x , y ) â§ Â¬ LeftOf ( x , y ) ) )\n\nTranslation:\nit is not the case that for all x , for all y , if x is a tetrahedron and y is a tetrahedron , then x is not to the right of y and x is not to the left of y");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item7 = form.addPageBreakItem().setHelpText("Formula:\nâ y Â¬ ( Dodec ( y ) â ( Large ( y ) â¨ Small ( y ) ) )\n\nTranslation:\nthere is an element y such that it is not the case that if y is a dodecahedron , then y is large or small");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item8 = form.addPageBreakItem().setHelpText("Formula:\nâ y ( Cube ( y ) â Â¬ Large ( y ) )\n\nTranslation:\nfor all cubes y , y is not large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item9 = form.addPageBreakItem().setHelpText("Formula:\nâ y â z ( ( Dodec ( y ) â§ Cube ( z ) â§ LeftOf ( y , z ) ) â Large ( y ) )\n\nTranslation:\nfor all y , for all z , if y is a dodecahedron , z is a cube and y is to the left of z , then y is large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item10 = form.addPageBreakItem().setHelpText("Formula:\nâ x â y ( Tet ( x ) â§ Cube ( y ) â§ Â¬ â z Dodec ( z ) )\n\nTranslation:\nthere is an element x such that there is an element y such that x is a tetrahedron , y is a cube and it is not the case that there is an element z such that z is a dodecahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item11 = form.addPageBreakItem().setHelpText("Formula:\nâ x â x Adjoins ( x , a )\n\nTranslation:\nthere is an element x such that there is an element x such that x is adjacent to a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item12 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ ( â x SameRow ( a , a ) â¨ ( Even ( a ) â¨ Large ( b ) ) )\n\nTranslation:\nit is not the case that for all x , a is in the same row as itself , a is even or b is large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item13 = form.addPageBreakItem().setHelpText("Formula:\nâ x Â¬ Small ( x ) â ( ( Cube ( a ) â§ Medium ( b ) ) â¨ â x Person ( a ) )\n\nTranslation:\nif there is an element x such that x is not small , then at least one of these holds : \n\tâ¢ a is a cube and b is medium \n\tâ¢ for all x , a is a person");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item14 = form.addPageBreakItem().setHelpText("Formula:\n( ( RightOf ( a , a ) â Pet ( a ) ) â§ ( Tet ( a ) â¨ Large ( a ) ) ) â¨ â x â x Tet ( a )\n\nTranslation:\nall these hold : \n\tâ¢ if a is to the right of itself , then a is a pet \n\tâ¢ a is a tetrahedron or a is large or for all x , there is an element x such that a is a tetrahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item15 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ ( ( Tet ( a ) â¨ SameCol ( a , b ) ) â§ ( SameSize ( a , c ) â§ Larger ( b , c ) ) )\n\nTranslation:\nit is not the case that all these hold : \n\tâ¢ a is a tetrahedron or a is in the same column as b , a is of the same size as c \n\tâ¢ b is larger than c");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item16 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( â x Smaller ( a , b ) â¨ â x Medium ( x ) )\n\nTranslation:\nthere is an element x such that for all x , a is smaller than b or for all x , x is medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item17 = form.addPageBreakItem().setHelpText("Formula:\nâ x â x SameSize ( a , x ) â â y ( Adjoins ( a , a ) â Medium ( a ) )\n\nTranslation:\nif for all x , for all x , a is of the same size as x , then for all y , if a is adjacent to itself , then a is medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item18 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( â y BackOf ( a , x ) â â y Large ( b ) )\n\nTranslation:\nfor all x , if for all y , a is in back of x , then there is an element y such that b is large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item19 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( â x Pet ( x ) â§ Small ( a ) )\n\nTranslation:\nthere is an element x such that there is an element x such that x is a pet and a is small");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item20 = form.addPageBreakItem().setHelpText("Formula:\nLarge ( a ) â¨ Medium ( a )\n\nTranslation:\na is large or medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item21 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ â x ( SameShape ( a , b ) â SameRow ( c , c ) )\n\nTranslation:\nit is not the case that there is an element x such that a is in the same shape as b and c is in the same row as itself");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item22 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( Tet ( x ) â¨ Prime ( a ) ) â¨ â x ( Person ( x ) â Student ( a ) )\n\nTranslation:\nfor all x , x is a tetrahedron or a is a prime or there is an element x such that a is a student");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item23 = form.addPageBreakItem().setHelpText("Formula:\nâ x â y Larger ( x , a ) â§ â y Â¬ Pet ( b )\n\nTranslation:\nthere is an element x such that for all y , x is larger than a and there is an element x such that for all y , b is not a pet");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item24 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( ( ( SameShape ( x , a ) â§ Tet ( x ) ) â Adjoins ( x , a ) )\n\nTranslation:\nfor all x , if x is of the same shape as a, then x is adjacent to a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item25 = form.addPageBreakItem().setHelpText("Formula:\nâ x Cube ( x ) ( Person ( a ) â Adjoins ( x , a ) )\n\nTranslation:\nthere is a cube such that a is a person or x is adjacent to a");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
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

var ss = SpreadsheetApp.create("1.14 results");
form.setConfirmationMessage("Thank you very much! Your response has been recorded.").setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId()).setShowLinkToRespondAgain(false);
}
