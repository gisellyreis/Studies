#include<bits/stdc++.h>

using namespace std;

int main() {
    int m, ten=10, five=5, one=1, count=0;
    cin>> m;

    while(m >= ten) {
        m-=ten;
        count++;
    }
    while(m >= five) {
        m-=five;
        count++;
    }
    while(m > 0) {
        m-=one;
        count++;
    }

    cout<< count<< endl;
    
}