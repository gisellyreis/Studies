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

int main() {
    int a, b;
    cin>> a>> b;

    if(b > a) {
        swap(a, b);
    }

    int x;
    x = GCD(a,b);

    cout<<x<<endl;
}