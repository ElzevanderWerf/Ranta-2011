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
        if n == 0:
            return self.makeAtom(n-1)
        else:
            i = r.choice(range(9))
            if i == 0:
                return self.makeAtom(n-1)
            elif i == 1:
                return "\\sim " + self.makeProp(n-1)
            elif i == 2:
                return "( " + self.makeProp(n-1) + " \\& " + self.makeProp(n-1) + " )"
            elif i == 3:
                return "( " + self.makeProp(n-1) + " \\vee " + self.makeProp(n-1) + " )"
            elif i == 4:
                return "( " + self.makeProp(n-1) + " \\supset " + self.makeProp(n-1) + " )"
            elif i == 5:
                return "( \\forall " + self.makeVar() + " ) " + self.makeProp(n-1)
            elif i == 6:
                return "( \\exists " + self.makeVar() + " ) " + self.makeProp(n-1)
            elif i == 7:
                return "( \\forall " + self.makeVar() + " \\in " + self.makeKind() + " ) " + self.makeProp(n-1)
            elif i == 8:
                return "( \\exists " + self.makeVar() + " \\in " + self.makeKind() + " ) " + self.makeProp(n-1)
            else:
                return None
    
    def makeAtom(self, n):
        """
        Randomly generate an atomic proposition from the lexicon,
        with maximum depth n.
        """
        i = r.choice(range(3))
        if i == 0:
            return self.toLatex(r.choice(self.lex.Pred1s)) + " { " + self.makeTerm(n-1) + " }"
        elif i == 1:
            return self.toLatex(r.choice(self.lex.Pred2s)) + " { " + self.makeTerm(n-1) + " } { " + self.makeTerm(n-1) + " }"
        elif i == 2: 
            return self.makeTerm(n-1) + " \\in " + self.makeKind()
        else:
            return None
        
    def makeKind(self):
        """
        Return a randomly chosen kind predicate from the lexicon.
        """
        return r.choice(self.lex.Kinds)
        
    def makeTerm(self, n):
        """
        Randomly generate a term from the lexicon, with maximum depth n.
        """
        if n == 0:
            return self.makeVar()
        else:
            i = r.choice(range(3))
            if i == 0:
                return self.makeVar()
            elif i == 1:
                return self.makeCons()
            elif i == 2:
                return self.makeFun(n-1)
            else:
                return None
        
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
        return str(random.randint(1, 100))
    
    def makeFun(self, n):
        """
        Randomly generate a function term from the lexicon, with maximum depth n.
        """
        if n == 0:
            return self.toLatex(r.choice(self.lex.Fun1s)) + " { " + self.makeVar() + " }"
        else:
            i = r.choice(range(2))
            if i == 0:
                return self.toLatex(r.choice(self.lex.Fun1s)) + " { " + self.makeTerm(n-1) + " }"
            elif i == 1:
                return self.toLatex(r.choice(self.lex.Fun2s)) + " { " + self.makeTerm(n-1) + " } { " + self.makeTerm(n-1) + " }"
            else:
                return None
    
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
        
rg = RandomGenerator(arithmLexicon)  
random_formula = rg.makeProp(3)
print(random_formula)

# Randomly generate 1000 formulas
formulas = []
for i in range(1000):
    rg = RandomGenerator(arithmLexicon)
    formulas.append(rg.makeProp(3))
    
#print(formulas[:10])


# Write formulas to file with newlines
with(open(r'test4Latex.tmp', 'w')) as f:
    f.write('\n'.join(formulas))
f.close()




# TODO sometimes the output formula has brackets around it (bc of makeProp -
#   switch 2,3,4): then it cannot be parsed by GF
# TODO generation of new variables and constants is now pseudorandom (there is a
#   random choice between the list of currently chosen variables and 
#   a new one in the list of integers)
# TODO docstrings en comments bij case switches per case
# TODO \\\\ of \\


        
        
