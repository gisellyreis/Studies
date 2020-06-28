#include<bits/stdc++.h>

using namespace std;

int main() {
    string p,t;
    cin>> p>>t;
    int n,m;
    n = p.size();
    m = t.size();
    int d[n+1][m+1];

    for(int i=0; i<=n; i++) {
        d[i][0] = i;
    }
    for(int j=0; j<=m; j++) {
        d[0][j] = j;
    }
  
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=m; j++) {
            if(p[i-1] == t[j-1]) d[i][j] = d[i-1][j-1];
            else d[i][j] = 1 + min(min(d[i][j-1], d[i-1][j]), d[i-1][j-1]);
        }   
    }
    
    cout<< d[n][m]<<endl;

}