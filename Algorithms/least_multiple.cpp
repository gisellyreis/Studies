#include<bits/stdc++.h>

using namespace std;

void swap(int a, int b) {
    int aux;
    aux = a;
    a = b;
    b = aux;
};

int GCD(int a, int b) {
    if(b == 0) {
        return a;
    }

    int aux = a % b;
    return GCD(b,aux);
};

long long LCM(int a, int b, int x) {
    long long res = (long long) a * b;
    return (long long) res / x;
};

int main() {
    int a, b;
    cin>> a>> b;

    if(b > a) {
        swap(a, b);
    }

    int x;
    x = GCD(a,b);

    long long res;
    res = LCM(a,b,x);

    cout<<res<<endl;
}