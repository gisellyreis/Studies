#include<bits/stdc++.h>

using namespace std;

double min(double a, double b) {
    if( a <= b)
        return a;
    return b;
}

struct item {
    double v;
    double w;
};

bool cmp(item a, item b) {
    double x = a.v / a.w;
    double y = b.v / b.w;
    return x>= y;
}

double knapsack(vector<item>&v, double n, double b) {
    double count=0.0, x;

    for(int i=0; i< n; i++) {
        if(b == 0) {
            return count;
        }
        x = min(v[i].w, b);
        count += x*(v[i].v / v[i].w);
        b-= x;
    }
    return count;
}

int main() {
    double n, b, x;
    cin>> n>> b;

    vector<item>v;
    item aux;

    cout<< fixed<< setprecision(4);
    for(int i=0; i< n; i++) {
        cin>> aux.v>> aux.w;
        v.push_back(aux);
    }

    stable_sort(v.begin(), v.end(), cmp);

    double res = knapsack(v, n, b);
    cout<< res<< endl;
}