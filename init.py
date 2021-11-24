import eel
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression

eel.init('web', allowed_extensions=['.js', '.html'])
df = pd.read_csv('heart.csv')
plt.figure(figsize=(15,10))
sns.heatmap(df.corr(), cmap='coolwarm', annot=True)
plt.savefig('web/cor.png')
features = ['age', 'serum_creatinine', 'anaemia','diabetes']
x = df[features]
y = df['DEATH_EVENT']
classifier = SVC()
classifier.fit(x, y)
log_class = LogisticRegression()
log_class.fit(x, y)
knn_class = KNeighborsClassifier(n_neighbors = 5, metric = 'minkowski', p = 2)
knn_class.fit(x, y)
nb_class = GaussianNB()
nb_class.fit(x, y)
@eel.expose
def py_2_column_cor(name1,name2):
    histogram=px.histogram(data_frame=df,x=name1,nbins=60,title=name1+" for "+name2,color=name2)
    histogram.write_image('web/pig2.png')
    return 1
@eel.expose
def py_2_SVC(diabet,ser,anaemia,age,choix):
    pdd = pd.DataFrame(data={'age':[int(age)],'serum_creatinine':[int(ser)],'anaemia':[int(anaemia)],'diabetes':[int(diabet)]})
    if choix == '4' :
        pred = classifier.predict(pdd)
    elif choix == '3' :
        pred = log_class.predict(pdd)
    elif choix == '2' :
        pred = knn_class.predict(pdd)
    else :
        pred = nb_class.predict(pdd)
    print(pred[0])
    return int(pred[0])
eel.start('index.html')