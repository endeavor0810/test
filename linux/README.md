

cd = change directoryh
ls = list files
pwd =  izlista ti trenutno gde se  nalazis   ( celu putanju)
man =  manual



<h1>Comboi:</h1>
man ls
man pwd
man cd

Kada vidis izraz flag flag izraz je kao kad kucamo git commit -m ( -m je flag)

lista komandi
cd /mnt/c/Users/iniko/test/
test_repo = go to test repo gde god da si u konzoli na  file sistemu sto je  ekvivalent cd kucanje_putanje
vs_test=odma ode na datu putanju i  otvori ti fodler ceo u vs codu.


Ako zelis da slican fazon napravis za neke druge foldere uradi sledece 
cd ~ (ovo znaci da  ces da odes u home gde  god da je home za tog usera gde god da se nalazis)
code .bash_aliases ( da o tvoris u vs codu .bash_aliases)
pogledaj primer, napravi novi alias iskopiraj  komandu (cd ) i samo zameni putanju, poromenis ime foldera.
Kada si zavrsio sa editovanjem  aliasa  pritisni ctrl S za save i u konzoli uradi sledece:

source ~/.bashrc       ovo je ekvvalent refresh pagea samo sto ne refreshujes stranu nego  ucitavas promene na koje se sistem oslanja na nivou sistema.




<h1>tips:</h1>

Postoje hidden fajlovi koje ls nece da izlista, hidden fajlovi su oni koj  krecu sa tackom
da bi prikazao hidden filovve treba da dodas flag -a na ls. 
sto znaci komanda ce izgledati ovako : ls -a
ili samo koristi ll za vise detalja