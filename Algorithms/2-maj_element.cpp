#include<bits/stdc++.h>

using namespace std;

struct element {
    int key, count = 0;
};

bool cmp(element a, element b) {
    return a.count > b.count;
}

int main() {
    int n, x;
    cin>> n;
    element e;
    vector<int>v;
    vector<element>a;

    for(int i=0; i<n; i++) {
        cin>> x;
        v.push_back(x);
    }

    stable_sort(v.begin(), v.end());

    e.key = v[0];
    int i =0;
    while(i< n) {
        while(v[i] == e.key) {
            e.count++;
            i++;
        }
        a.push_back(e);
        e.count = 0;
        e.key = v[i];
    }

    stable_sort(a.begin(), a.end(), cmp);

    if(a[0].count > (n/2)) {
        cout<< 1<< endl;
    }
    else {
        cout<< 0<< endl;
    }
}