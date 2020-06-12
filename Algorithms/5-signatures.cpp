#include<bits/stdc++.h>

using namespace std;

struct coord {
    int x;
    int y;
};

bool cmp(coord a, coord b) {
    return a.y < b.y;
}

int main() {
    int n;
    cin>> n;
    vector<coord>v;
    set<int>c;
    coord aux;
    int x;

    for(int i=0; i<n; i++) {
        cin>>aux.x>> aux.y;
        v.push_back(aux);
    }

    stable_sort(v.begin(), v.end(), cmp);

    x = v[0].y;
    c.insert(x);
    for(int i=1; i<n; i++) {
        if(x >= v[i].x && x<= v[i].y) {
           continue;
        }
        else {
            x = v[i].y;
            c.insert(x);
        }
    }

    cout<< c.size()<<endl;
    if(c.size() != 0) {
        for(set<int>::iterator it = c.begin(); it!=c.end(); it++) {
            cout<< *it<< ' ';
        }
        cout<<endl;
    }
}

