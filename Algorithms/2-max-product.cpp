#include <bits/stdc++.h>

using namespace std;

int main() {
    long long n, x;
    cin>> n;
    vector<long long> v;

    for(int i=0; i< n; i++) {
        cin>> x;
        v.push_back(x);
    }

    long long maior = -1, maxIdx, sMaior = -1;
    for(int i=0; i< n; i++) {
        if(v[i] > maior) {
            maior = v[i];
            maxIdx = i;
        }
    }

    for(int i=0; i< n; i++) {
        if(i != maxIdx && v[i] > sMaior) {
            sMaior = v[i];
        }
    }

    long long res = maior * sMaior;

    cout<< res << endl;
}