/// <reference path="./android.d.ts" />
/// <reference path="./ios.d.ts" />
/// <reference path="./node_modules/typescript/lib/lib.core.es6.d.ts" />

class IOSTest extends NSObject {
}

let pointer = new interop.Pointer();

class AndroidTest extends java.lang.Object {
    public do() {
        long(12);
    }
}
