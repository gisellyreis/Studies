#include<bits/stdc++.h>

using namespace std;

int main() {
    int w, n, x;
    cin>> w>> n;
    int v[n+1];
    vector<vector<int>> dp(w+1, vector<int>(n+1, 0));

    v[0] = 0;
    for(int i=1; i<=n;i++) {
        cin>> x;
        v[i] = x;
    }

    for(int i=0; i<=n; i++) {
        for(int j=0; j<= w; j++) {
            if(i == 0) dp[j][i] = 0;
            else if(j == 0) dp[j][i] = 0;

            else {
                dp[j][i] = dp[j][i-1];
                if(v[i] <= j) {
                    x = dp[j - v[i]][i-1] + v[i];
                    if(dp[j][i] < x) dp[j][i] = x;
                }
            }
        }
    }

   
    cout<< dp[w][n] <<endl;
}