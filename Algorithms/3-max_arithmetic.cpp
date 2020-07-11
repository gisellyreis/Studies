#include<bits/stdc++.h>

using namespace std;

long long minMax(int i, int j) {
    long long min = 10000000001;
    long long max = -10000000001;
    long long a, b, c, d;

    for(int k = i; k< j-1; k++) {

    }

    return (min, max);
}

int main() {
    
    string s;
    vector<int>d;
    vector<char>op;
    cin>> s;
    int n = s.size();

    for(int i= 0; i<n; i++) {
        if(s[i] >= 48 || s[i] <= 57) d.push_back(s[i]);
        else op.push_back(s[i]);
    }

    n = d.size();
    int m = op.size();
    long long mi[n][n], ma[n][n];
    long long k;

    for(int i= 0; i< n; i++) {
        mi[i][i] = d[i];
        ma[i][i] = d[i];
    }

    for(int j = 0; j< n-1; j++) {
        for(int i = 0; i< n-j; i++) {
            k = i + j;
            mi[i][k], ma[i][k] = minMax(i, k);
        }
    }
}