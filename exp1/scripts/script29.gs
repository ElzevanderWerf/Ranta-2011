function main29() {
var file = DriveApp.getFileById("1brt4qB9t1gXp4q93JaMCuNRmO22LRAb-CtPXK4mWp2k").makeCopy("1.29 Evaluating English translations from First-Order Logic formulae");
var form = FormApp.openById(file.getId());
form.setTitle("1.29 Evaluating English translations from First-Order Logic formulae");

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

var item1 = form.addPageBreakItem().setHelpText("Formula:\nâ v ( Â¬ Small ( v ) â§ Dodec ( v ) )\n\nTranslation:\nthere is an element v such that v is not small and v is a dodecahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item2 = form.addPageBreakItem().setHelpText("Formula:\nâ y ( Â¬ Large ( y ) â§ Dodec ( y ) )\n\nTranslation:\nthere is an element y such that y is not large and y is a dodecahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item3 = form.addPageBreakItem().setHelpText("Formula:\nâ x â y ( Cube ( x ) â§ Large ( x ) â§ LeftOf ( x , b ) )\n\nTranslation:\nthere is an element x such that there is an element y such that x is a cube , x is large and x is to the left of b");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item4 = form.addPageBreakItem().setHelpText("Formula:\nâ x â y ( ( Tet ( x ) â§ Dodec ( y ) ) â Â¬ â x ( Tet ( x ) â§ Â¬ FrontOf ( x , y ) ) )\n\nTranslation:\nfor all x , for all y , if x is a tetrahedron and y is a dodecahedron , then it is not the case that there is a tetrahedron x such that x is not in front of y");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item5 = form.addPageBreakItem().setHelpText("Formula:\nâ x â y ( ( Dodec ( x ) â§ Â¬ LeftOf ( y , x ) ) â LeftOf ( x , y ) )\n\nTranslation:\nfor all x , there is an element y such that if x is a dodecahedron and y is not to the left of x , then x is to the left of y");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item6 = form.addPageBreakItem().setHelpText("Formula:\nFrontOf ( b , d ) â§ FrontOf ( b , e ) â§ Smaller ( b , d ) â§ Smaller ( b , e )\n\nTranslation:\nb is in front of d , in front of e , smaller than d and smaller than e");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item7 = form.addPageBreakItem().setHelpText("Formula:\nâ z ( Tet ( z ) â â y ( â x ( Cube ( x ) â§ Larger ( a , x ) ) â Smaller ( a , z ) ) )\n\nTranslation:\nfor all tetrahedrons z , for all y , if a is larger than some cube , then a is smaller than z");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item8 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( Dodec ( x ) â LeftOf ( a , x ) )\n\nTranslation:\na is to the left of every dodecahedron");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item9 = form.addPageBreakItem().setHelpText("Formula:\nâ z â x ( Cube ( z ) â§ Tet ( x ) â§ Larger ( z , x ) )\n\nTranslation:\nthere is an element z such that there is an element x such that z is a cube , x is a tetrahedron and z is larger than x");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item10 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( ( Cube ( x ) â§ Small ( x ) ) â â u ( Large ( u ) â§ Cube ( u ) â§ BackOf ( x , u ) ) )\n\nTranslation:\nfor all x , if x is a cube and x is small , then there is an element u such that u is large , u is a cube and x is in back of u");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item11 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( LeftOf ( a , b ) â¨ Small ( b ) ) â¨ LeftOf ( b , c )\n\nTranslation:\nthere is an element x such that a is to the left of b or b is small or b is to the left of c");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item12 = form.addPageBreakItem().setHelpText("Formula:\nâ x â x ( Pet ( a ) â§ Medium ( x ) )\n\nTranslation:\nthere is an element x such that there is an element x such that a is a pet and x is medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item13 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( ( Pet ( a ) â SameSize ( b , x ) ) â§ ( Tet ( a ) â§ Even ( x ) ) )\n\nTranslation:\nthere is an element x such that all these hold : \n\tâ¢ if a is a pet , then b is of the same size as x , a is a tetrahedron \n\tâ¢ x is even");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item14 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ â x ( Small ( x ) â¨ Even ( x ) )\n\nTranslation:\nit is not the case that for all x , x is small or even");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item15 = form.addPageBreakItem().setHelpText("Formula:\nâ x â y FrontOf ( y , x ) â ( ( SameRow ( a , a ) â Small ( a ) ) â§ â z FrontOf ( a , z ) )\n\nTranslation:\nif there is an element x such that for all y , y is in front of x , then all these hold : \n\tâ¢ if a is in the same row as itself , then a is small \n\tâ¢ there is an element z such that a is in front of z");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item16 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( ( BackOf ( x , x ) â¨ RightOf ( a , x ) ) â¨ ( Even ( a ) â BackOf ( b , x ) ) )\n\nTranslation:\nfor all x , at least one of these holds : \n\tâ¢ x is in back of itself , a is to the right of x \n\tâ¢ if a is even , then b is in back of x");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item17 = form.addPageBreakItem().setHelpText("Formula:\n( â x Prime ( a ) â¨ ( Adjoins ( b , a ) â¨ Prime ( c ) ) ) â§ Medium ( a )\n\nTranslation:\nall these hold : \n\tâ¢ for all x , a is a prime , b is adjacent to a or c is a prime \n\tâ¢ a is medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item18 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ ( â x Dodec ( a ) â¨ â y Large ( a ) )\n\nTranslation:\nit is not the case that for all x , a is a dodecahedron or there is an element y such that a is large");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item19 = form.addPageBreakItem().setHelpText("Formula:\nÂ¬ â x ( Small ( a ) â§ Medium ( b ) )\n\nTranslation:\nit is not the case that there is an element x such that a is small and b is medium");
form.addMultipleChoiceItem().setTitle("Is the translation correct?").setHelpText("ğ¾ğ¤ğ§ğ§ğğğ© means that the sentence conveys exactly the same information as the input logical formula.").setChoiceValues(["Yes", "No"]).setRequired(true);
form.addScaleItem().setTitle("Is the translation clear?").setHelpText("ğ¾ğ¡ğğğ§ means that the sentence is understandable and does not have multiple readings.").setBounds(1,5).setLabels("Very unclear", "Very clear").setRequired(true);
form.addScaleItem().setTitle("Is the translation fluent?").setHelpText("ğğ¡ğªğğ£ğ© means that the sentence sounds as a natural English sentence.").setBounds(1,5).setLabels("Not fluent", "Very fluent").setRequired(true);
form.addParagraphTextItem().setTitle("Do you have a suggestion for a better translation? If so, then write it down here.");

var item20 = form.addPageBreakItem().setHelpText("Formula:\nâ x ( â y SameShape ( a , y ) â ( Dodec ( b ) â Even ( a ) ) )\n\nTranslation:\nfor all x , if there is an element y such that a is of the same shape as y , then if b is a dodecahedron , then a is even");
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

var ss = SpreadsheetApp.create("1.29 results");
form.setConfirmationMessage("Thank you very much! Your response has been recorded.").setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId()).setShowLinkToRespondAgain(false);
}
