import eel
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px

eel.init('web', allowed_extensions=['.js', '.html'])
df = pd.read_csv('heart.csv')
plt.figure(figsize=(15,10))
sns.heatmap(df.corr(), cmap='coolwarm', annot=True)
plt.savefig('web/cor.png')
histogram=px.histogram(data_frame=df,x="age",nbins=60,title="age for deadth",color="DEATH_EVENT")


histogram.savefig('web/pig.png')
@eel.expose                         # Expose this function to Javascript
def py_affiche():
    print("test")

eel.start('index.html')