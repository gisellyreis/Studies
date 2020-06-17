#include<bits/stdc++.h>

using namespace std;

int bin(vector<int>&v, int l, int h, int key) {
    int mid;
    while(l <= h) {
        mid = (l + (h-l)/2);
        if(key == v[mid]) 
            return mid;
        else if(key < v[mid])
            h = mid-1;
        else 
            l = mid + 1;
    }
    return -1;
}

int main() {
    int n, x;
    cin>> n;
    vector<int>v;

    for(int i=0; i< n; i++) {
        cin>> x;
        v.push_back(x);
    }
    cin>> n;
    for(int i = 0; i< n; i++) {
        cin>> x;
        x = bin(v, 0, v.size()-1, x);
        cout<< x<< ' ';
    }
    cout<<endl;
}