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

    stable_sort(v.begin(), v.end());

    long long res = v[n-1] * v[n-2];

    cout<< res<< endl;
}