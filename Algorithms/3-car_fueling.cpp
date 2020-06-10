#include<bits/stdc++.h>

using namespace std;

int refills(vector<int>&v, int n, int m) {
    int count=0;
    int current = 0, last;

    while(current <= n) {
        last = current;
        while(current <= n && v[current+1] - v[last] <= m) {
            current++;
        }
        if(current == last) {
            return -1;
        }
        if(current <= n) {
            count++;
        }
    }

    return count;
}

int main() {
    int d, m, n, x, res;
    cin>> d>>m>>n;

    vector<int>v;
    v.push_back(0);

    for(int i=1; i<n +1; i++) {
        cin>> x;
        v.push_back(x);
    }

    v.push_back(d);

    res = refills(v, n, m);
    cout<< res<<endl;
}