#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    vector<long long>fib;
    long long x;

    x = 0;
    fib.push_back(x);
    x = 1;
    fib.push_back(x);

    cin>> n;
    if(n<2) {
        cout<< n<< endl;
        return 0;
    }
    else {
        for(int i=2; i<= n; i++) {
            x = fib[i-2] + fib[i-1];
            fib.push_back(x);
        }

        cout<<fib[n]<<endl;
    }
}