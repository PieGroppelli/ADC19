import pandas as pd
import pygithub3 as pg3
import datetime


from pip._vendor.distlib.compat import raw_input


def uploadCVDdata(urlDB) :
#i define links for the DB as an argument
   # urlDB='https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv'
    #-----------------------------------------------


    #using pandas i read data from the link and save them in the path
    data = pd.read_csv(urlDB ,sep=",") # use sep="," for coma separation.
    data.describe()
    indice = pd.DataFrame(data)
    indice = indice.drop(indice.columns[[0,1,2,3,4,5,7,8,11,12,13,14,15]], axis=1)
    dati = indice.to_csv(None, na_rep='Unkown', encoding='utf-8')
    #-----------------------------------------------------------------

    #login inside github with a token
    token = "SDF5S46S46FS4F6S7F6SF6SFS4C1ZF4G6"
    gh = pg3.Github(token)
    #---------------------------------------------------------

    #i get the repository where the file is
    repo_name ='PieGroppelli/ADC19'
    repo = gh.get_repo(repo_name)
    #----------------------------------------

    #i upadate the file
    content = 'PieGroppelli/datiADC19.csv'
    try:
        sha = repo.get_contents(content).sha
        repo.update_file(
            content,
            "update",
            dati,
            sha
        )
    except(Exception):
        repo.create_file(
        content,
        "create",
        dati,
        )
    #-------------------------------------------------
#call uploadCVDdata() when it's time.
def orologioUpload(ore, minuti,urlDB):
    try:
        while True:
            oreRN = datetime.datetime.now().hour
            minutiRN = datetime.datetime.now().minute
            secondiRN = datetime.datetime.now().second
            if oreRN == int(ore) and minutiRN == int(minuti) and secondiRN == int(10):
                uploadCVDdata(urlDB)
                print( f"{oreRN}:{minutiRN} -> successfully uploaded")
    except KeyboardInterrupt :
        print("exit from the program")

print("__________CVD19_________________")
raw_input("CVD19 SET-UP press a key to start.")

a = input("insert a  database URL: ")
b = input("insert the hour when you want to upload the file ")
c = input("insert the minute when you want to upload the file ")
raw_input("set-up finished press a key to launch the program")
print("---------------started-----------------")
orologioUpload(b,c,a)
