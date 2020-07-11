#include<bits/stdc++.h>

using namespace std;

int main() {
    string text;
    int frases = 0;

    while(frases != 3) {
        getline(cin, text);
        frases++;
    }
    

    cout<< "texto lido: "<< text << "quantidade de frases: " << frases <<endl;
}