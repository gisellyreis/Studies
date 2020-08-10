#include<bits/stdc++.h>

using namespace std;

bool subset(int v[], int n, int a, int b, int c) {
    if(a == 0 && b == 0 && c == 0) return true;
    if (n < 0 ) return false;
    bool bA = false;
    if(a - v[n] >= 0) bA = subset(v, n-1, a - v[n], b, c);
    bool bB = false;
    if( !bA && (b - v[n] >= 0)) bB = subset(v, n-1, a, b - v[n], c);
    bool bC = false;
    if( (!bA && !bB) && (c - v[n] >= 0)) bC = subset(v, n-1, a, b, c - v[n]);

    return bA || bB || bC;
}

bool partition(int n, int v[]) {
    if(n < 3) return false;
    int sum = accumulate(v, v+n, 0);

    return !(sum % 3) && subset(v, n-1, sum/3, sum/3, sum/3);
}

int main() {
   int n, x;
   cin>> n;
   int v[n];
   
   for(int i = 0; i< n; i++)  {
       cin>> x;
       v[i] = x;
   }

   if(partition(n, v)) cout<< '1'<<endl;
   else cout<< '0'<<endl;
}

