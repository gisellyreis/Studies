#include<bits/stdc++.h>

using namespace std;

int main() {
    int n, x, m;
    cin>> n;
    int s1[n+1];

    for(int i =1; i<=n; i++) {
        cin>> x;
        s1[i] = x;
    }

    cin>> m;
    int s2[m+1];
    int dp[n+1][m+1];

    for(int i =1; i<=m; i++) {
        cin>> x;
        s2[i] = x;
    }

    for(int i=0; i<=n; i++) {
        for(int j=0; j<=m; j++) {
            if(i == 0 || j == 0 ) dp[i][j] = 0;
            else if(s1[i] == s2[j]) dp[i][j] = dp[i-1][j-1]+1;
            else dp[i][j] = max(dp[i][j-1], dp[i-1][j]);
        }
    }

    cout<<dp[n][m]<<endl;
}