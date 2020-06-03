#include<bits/stdc++.h>

using namespace std;

int main() {
    long long n, atual, anterior, soma=1, fib;

    anterior = 0;
    atual = 1;

    cin>> n;
    if(n < 2) {
        cout<< n<< endl;
        return 0;
    }
    n%=60; // Pisano period
    if( n == 0) {
        soma = 0;
    }
    for(long long i=2; i<= n; i++) {
        fib = (atual + anterior) %10;
        anterior = atual;
        atual = fib;

      //  cout<< i<< " fib: "<< fib<< " soma: "<< (soma %10)<<endl;
        soma += fib;
    }

    cout<< (soma %10) <<endl;
}