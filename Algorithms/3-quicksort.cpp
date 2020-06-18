#include<bits/stdc++.h>

using namespace std;

void print(vector<int>&v) {
    for(int i=0; i< v.size(); i++) {
        cout<< v[i]<<" ";
    }
    cout<<endl;
}

void partition(vector<int>&v, int low, int high, int &i, int &j) {

    int mid = low;
    int p = v[high];
    while(mid <= high) {
        if(v[mid] < p) {
            swap(v[low++], v[mid++]);
        }
        else if(v[mid] > p) {
            swap(v[mid], v[high--]);
        }
        else {
            mid++;
        }
    }
    i = low -1;
    j = mid;
}

void quickSort(vector<int>&v, int low, int high) {
    if(low < high) {
        int i, j;
        partition(v, low, high, i, j);
        quickSort(v, low, i);
        quickSort(v, j, high);
    }
}

int main() {
    int n, x;
    cin>>n;
    vector<int>v;

    for(int i=0; i< n; i++) {
        cin>>x;
        v.push_back(x);
    }

    quickSort(v, 0, v.size()-1);
    print(v);
}