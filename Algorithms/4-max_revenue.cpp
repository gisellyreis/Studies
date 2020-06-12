#include<bits/stdc++.h>

using namespace std;

bool cmp(int a, int b) {
    return a > b;
}

int main() {
    long long n, x, prod=0;
    cin>> n;
    vector<long long>v,p;

    for(int i=0; i< n; i++) {
        cin>> x;
        v.push_back(x);
    }
    for(int i=0; i< n; i++) {
        cin>> x;
        p.push_back(x);
    }

    stable_sort(v.begin(), v.end(), cmp);
    stable_sort(p.begin(), p.end(), cmp);

    for(int i=0; i< n; i++) {
        prod += (v[i]*p[i]);
    }

    cout<< prod<<endl;
}