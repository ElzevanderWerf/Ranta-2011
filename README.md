## Testing the logic-to-language translation system of Ranta (2011)

This is the original version of Ranta's code, taken from [cade-2011](https://github.com/GrammaticalFramework/gf-contrib/tree/master/cade-2011), with 3 small bug fixes:
1. 	`PropLatex.gf`) Comment of Ranta `fix negation of in` at `lin AKind`: *1 \in N* is parsed and linearized as both *1 is a number* and *1 is not a number*. New code:
        
        AKind k x = table {True => top x ++ "\\in" ++ k ; False => top (prefix 3 "\\sim" (constant (top x ++ "\\in" ++ k)))} ;
	Now it only returns *1 is a number*.
2. 	`PropLatex.gf`) The linearization functions of `ModKind` and `PartPred` were wrong and commented out. New code:

			ModKind k m = (m ! True) ++ k ;
			PartPred f y = \\b => (f ! b)  ++ "to" ++ (top y) ;
3.	`PropLatex.gf`) *\even { 2 }* translates to *2 is even* (`PAtom (APred1  Even (IInt 2)`) AND *2 is not even* (`PNegAtom (APred1 Even (IInt 2))`). This happened because of wrong code in the `slash` operation (3rd case of the overload). New code: 

			slash : Str -> Bool => Str = \f -> table {True => "\\" + f ; False => top (prefix 3 "\\sim" (constant ("\\" + f)))} ;

I have done the following three tests to translate between lan										 
#### Test 1: GF random generation
**Filenames start with test1**
0. In `Prop.gf` and `PropLatex.gf`, I removed (commented out) the geometry lexicon (the functions `Vertical`, `Horizontal`, `Parallel`, `Line`, `Point`, `Centre`, and `Intersection`), so that I would only generate formulas with arithmetic predicates and functions.
   
1. Random generation. I opened the GF shell and imported the Latex grammar as follows:

	    >gf cade-2011-original-test/PropLatex.gf
   In the GF shell, I generated 1000 trees with:
   
		>gr -number=1000 | wf -file=test1.tmp
   Note that the default generation depth is 4 (so the maximum depth of the generated abstract syntax trees is 4).
		
2. I read through these trees and generated the latex linearizations of these trees:

		>rf -file=test1.tmp -lines -tree | l -lang=Latex | wf -file=test1Latex.tmp
		
   Result: a file of 1000 Latex formulas, called `test1Latex.tmp`.
   
3. To translate these formulas into English with Ranta's optmiziation, I wrote a Haskell script in `TransTest.hs`. In `cade.cabal` (for running it from the command line), I changed the line 

		main-is: Trans.hs 
	to
	
		main-is: TransTest.hs
		
    `TransTest.hs` includes code to read the generated latex formulas from an input-file and parse and linearize them into optimized English translations. These translations are written to another output-file. There might be more than one parse of a latex formula, so there might be more than one English translation for each Latex formula. That is why the English translations file is longer than the Latex formulas file, but for readability there is an extra space between the translations of one Latex formula and the next one.
4. Running `TransTest.hs`:
    I build the executable `trans.exe`:

		>stack build
		
    To run `TransTest.hs`, do

		>stack run trans <input-file> <output-file>
		
	So in our case:
	
		>stack run trans test1Latex.tmp test1Eng.tmp
		
6. For combining the two files (`test1Latex.tmp` and `test1Eng.tmp`) into one, for readability, I wrote a Python script in `makecsv.py` that writes the formulas with translations to a csv file. To run the script, do:

		>python <latex-file> <english-translations-file> <output-csv>
    In this case:
    
		>python makecsv.py test1Latex.tmp test1Eng.tmp test1.csv


#### TEST 2
**Filenames start with ggc**
The usefulness of the translations of is very low, because of the way the random generation function is built. Therefore, I have decided to use the Grade Grinder Corpus (in `translationcorpus-1.0.1.csv`) for generating more useful Latex formulas. This means that we skip the generation steps (1-2) from TEST 1, and instead do the following:

1. The Python script in `ggcPreprocessing.py` writes a list of useful formulas to the file `ggc-formulas.tmp`, with the following preprocessing to ignore weird formulas and include spacing:
	- Take only the canonical form of the formulas (student answers) that were marked correct.
	- Remove all formulas with NaN.
	- Remove formulas with these specific characters or strings: "=", "<", ">", "^", "+", "*", "%", "is", "not", "equivalent", ".", "\"", "\\", "0", "1", "2", "3", "4", "5", ":" (these are part of structures that are not parsable by Ranta’s system).
	- Remove formulas with 3- and 4-place predicates (not parsable by Ranta's system either).
	- Add spaces to the formulas, a
	- Remove formulas with more than 100 characters (because the GF shell gets stuck at the formulas that are too long)
2. I made a GF grammar for the GGC notation, called `PropGGC` in `PropGGC.gf` (in this way, I could do the translations from GGC to Latex notation very easily).
3. The Python script in `ggcExtractPredicates.py` extracts the list of 1- and 2-place predicates used in the corpus. I added these predicates to the grammars of English, Latex and GGC, and commented out the other two test lexicons.
5. Read through the file of GGC formulas (`ggc-formulas.tmp`), parsed them, and generated the Latex linearizations of these formulas:

		>gf PropGGC.gf PropLatex.gf
		>rf -file=ggc-formulas.tmp -lines | p -lang=GGC | l -lang=Latex | wf -file=ggc-Latex.tmp
6. I ran TransTest.hs with arguments `ggc-Latex.tmp` and `ggc-Eng.tmp`:

		>make pgf
		>stack build
		>stack run trans ggc-Latex.tmp ggc-Eng.tmp
		
7. I used `makecsv.py` to combine into them again into a csv for readability:

		>python makecsv.py ggc-Latex.tmp ggc-Eng.tmp ggc-latex-to-eng.csv
		>python makecsv.py ggc-formulas.tmp ggc-Eng.tmp ggc-formulas-to-eng.csv
		
**TODO**: maybe directly translate from GGC-formulas to English with transTest.hs. Then I do not need to limit the formulas to 100 characters.


#### TEST 3 
**Filenames start with test3**
I designed a random generation function myself, which should include more different numbers and variables, and not allow for vacuous quantification.
    1. In `test3RrandomGeneration.py`, I wrote a Python script to randomly generate formulas. The output generated formulas are in `test3Latex.tmp`.
**TODO**: unfinished