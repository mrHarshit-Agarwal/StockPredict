import numpy as np  
import pandas as pd  

 
import os
for dirname, _, filenames in os.walk('goldman.csv'):
    for filename in filenames:
        print(os.path.join(dirname, filename))
 
filepath = 'goldman.csv'
data = pd.read_csv(filepath)
data = data.sort_values('Date')
data.head()

# %%
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_style("darkgrid")
plt.figure(figsize = (15,9))
plt.plot(data[['Close']])   
plt.xticks(range(0,data.shape[0],500),data['Date'].loc[::500],rotation=45)
plt.title("goldman sachs Stock Price",fontsize=18, fontweight='bold')
plt.xlabel('Date',fontsize=18)
plt.ylabel('Close Price (USD)',fontsize=18)
plt.show() 

# %%
price = data[['Close']]
price.info()

# %%
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler(feature_range=(-1, 1))
price['Close'] = scaler.fit_transform(price['Close'].values.reshape(-1,1))

# %%
def split_data(stock, lookback):
    data_raw = stock.to_numpy()  
    data = []
     
    for index in range(len(data_raw) - lookback): 
        data.append(data_raw[index: index + lookback])
   
    data = np.array(data)
    test_set_size = int(np.round(0.2*data.shape[0]))
    train_set_size = data.shape[0] - (test_set_size)
    
    x_train = data[:train_set_size,:-1,:]
    y_train = data[:train_set_size,-1,:]
    
    x_test = data[train_set_size:,:-1]
    y_test = data[train_set_size:,-1,:]
    
    return [x_train, y_train, x_test, y_test]

# %%
 
lookback = 20  
x_train, y_train, x_test, y_test = split_data(price, lookback)
print('x_train.shape = ',x_train.shape)
print('y_train.shape = ',y_train.shape)
print('x_test.shape = ',x_test.shape)
print('y_test.shape = ',y_test.shape)
