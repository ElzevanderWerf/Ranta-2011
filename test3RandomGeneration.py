"""Python script to create a list of randomly generated FOL formulas in
Latex notation, for a given test lexicon."""

import random

r = random.SystemRandom()

class Lexicon:
    def __init__(self, Pred1s, Pred2s, Fun1s, Fun2s, Kinds):
        self.Pred1s = Pred1s
        self.Pred2s = Pred2s
        self.Fun1s = Fun1s
        self.Fun2s = Fun2s
        self.Kinds = Kinds

class RandomGenerator:
    def __init__(self, lexicon):
        self.lex = lexicon
        self.new_var_i = 1

    def makeProp(self, n):
        """
        Randomly generate a well-behaved? proposition from the lexicon,
        with maximum depth n.
        """
        # TODO I ignored list conjunction and disjunction for now. 
        # How about remove 7 and 8 and only focus on core syntax?
        # TODO should variables always be bound in a formula? Then I need to change a lot of things.
        if n == 0:          # termination signal
            return self.makeAtom(n-1)
        else: 
            i = r.choice(range(9))
            if i == 0:      # atomic proposition
                return self.makeAtom(n-1)
            elif i == 1:    # negation
                return "\\sim " + self.makeProp(n-1)
            elif i == 2:    # conjunction
                return "( " + self.makeProp(n-1) + " \\& " + self.makeProp(n-1) + " )"
            elif i == 3:    # disjunction
                return "( " + self.makeProp(n-1) + " \\vee " + self.makeProp(n-1) + " )"
            elif i == 4:    # implication
                return "( " + self.makeProp(n-1) + " \\supset " + self.makeProp(n-1) + " )"
            elif i == 5:    # universal quantification
                return "( \\forall " + self.makeVar() + " ) " + self.makeProp(n-1)
            elif i == 6:    # existential quantification
                return "( \\exists " + self.makeVar() + " ) " + self.makeProp(n-1)
            elif i == 7:    # bounded universal quantification
                return "( \\forall " + self.makeVar() + " \\in " + self.makeKind() + " ) " + self.makeProp(n-1)
            else:    # bounded existential quantification
                return "( \\exists " + self.makeVar() + " \\in " + self.makeKind() + " ) " + self.makeProp(n-1)
    
    def makeAtom(self, n):
        """
        Randomly generate an atomic proposition from the lexicon,
        with maximum depth n.
        """
        i = r.choice(range(3))
        if i == 0:      # 1-place predicate
            return self.toLatex(r.choice(self.lex.Pred1s)) + " { " + self.makeTerm(n-1) + " }"
        elif i == 1:    # 2-place predicate
            return self.toLatex(r.choice(self.lex.Pred2s)) + " { " + self.makeTerm(n-1) + " } { " + self.makeTerm(n-1) + " }"
        else:           # kind predicate
            return self.makeTerm(n-1) + " \\in " + self.makeKind()
        
    def makeKind(self):
        """
        Return a randomly chosen kind predicate from the lexicon.
        """
        return r.choice(self.lex.Kinds)
        
    def makeTerm(self, n):
        """
        Randomly generate a term from the lexicon, with maximum depth n.
        """
        if n == 0:          # termination signal
            return self.makeVar()
        else:
            i = r.choice(range(3))
            if i == 0:      # variable
                return self.makeVar()
            elif i == 1:    # constant
                return self.makeCons()
            else:    # function
                return self.makeFun(n-1)
        
    def makeVar(self):
        """
        Generate a variable (new or already used) in the lexicon.
        """
        i = random.randint(1, self.new_var_i)
        if i == self.new_var_i:
            self.new_var_i += 1
        return "x" + str(i)
        
    def makeCons(self):
        """
        Generate a new constant in the lexicon.
        """
        return str(random.randint(1, 100)) #or maybe randomly choose from a list of constants in the lexicon?
    
    def makeFun(self, n):
        """
        Randomly generate a function term from the lexicon, with maximum depth n.
        """
        if n == 0:          # termination signal
            return self.toLatex(r.choice(self.lex.Fun1s)) + " { " + self.makeVar() + " }"
        else:
            i = r.choice(range(2))
            if i == 0:      # unary function
                return self.toLatex(r.choice(self.lex.Fun1s)) + " { " + self.makeTerm(n-1) + " }"
            else:    # binary function
                return self.toLatex(r.choice(self.lex.Fun2s)) + " { " + self.makeTerm(n-1) + " } { " + self.makeTerm(n-1) + " }"
    
    def toLatex(self,s):
        """
        Turn a function or predicate name into Latex notation.
        """
        return "\\" + s.lower()        
    
#TEST 4    
arithmLexicon = Lexicon(["Even", "Odd"],    #Pred1s
                        ["Equal"],          #Pred2s
                        ["Square"],         #Fun1s
                        ["Sum", "Product"], #Fun2s
                        ["N"])              #Kinds

ggcLexicon = Lexicon(["Small", "Medium", "Large", "Even"],      #Pred1s
                        ["Adjoins", "SameCol", "LeftOf", "RightOf", "Smaller", 
                         "FrontOf", "Larger", "SameRow", "SameShape", 
                         "SameSize", "BackOf"],                 #Pred2s
                        [],                                     #Fun1s #cannot choose from an empty sequence!
                        [],                                     #Fun2s #cannot choose from an empty sequence!
                        ["Dodec", "Student", "Cube", "Prime", "Person", 
                         "Tetrahedron", "Pet"])                 #Kinds
        
rg = RandomGenerator(arithmLexicon)  
random_formula = rg.makeProp(3)
print(random_formula)

# =============================================================================
# # Randomly generate 1000 formulas
# formulas = []
# rg = RandomGenerator(arithmLexicon)
# for i in range(1000):
#     formulas.append(rg.makeProp(3))
#     rg.new_var_i = 1    #set again to 1 for generating a new prop
# 
# # Write formulas to file with newlines
# with(open(r'test4Latex.tmp', 'w')) as f:
#     f.write('\n'.join(formulas))
# f.close()
# =============================================================================




# TODO sometimes the output formula has brackets around it (bc of makeProp -
#   switch 2,3,4): then it cannot be parsed by GF
# TODO generation of new variables and constants is now pseudorandom (there is a
#   random choice between the list of currently chosen variables and 
#   a new one in the list of integers)


        
        
