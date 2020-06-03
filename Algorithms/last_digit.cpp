#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    vector<int>fib;
    int x;

    fib.push_back(0);
    fib.push_back(1);

    cin>> n;
    for(int i=2; i<= n; i++) {
        x = (fib[i-2] + fib[i-1])%10;
        fib.push_back(x);
    }

    cout<<fib[n]<<endl;
}