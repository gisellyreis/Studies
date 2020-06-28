#include<bits/stdc++.h>

using namespace std;

int main() {
    int money;
    cin>> money;
    int coins[4] = {0,1,3,4};
    int minCoins[money];
    minCoins[0] = 0;
    int count;

    for(int i = 1; i<= money; i++) {
        minCoins[i] = 10001;
        for(int j = 1; j<=3; j++) {
            if(i>= coins[j]) {
                count = minCoins[i- coins[j]]  + 1;
                if(count < minCoins[i])
                    minCoins[i] = count;
            }
        }
    }
    cout<< minCoins[money]<< endl;
    
}