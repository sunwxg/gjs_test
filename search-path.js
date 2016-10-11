#!/usr/bin/env gjs-console

print("type of searchPath:" + typeof(imports.searchPath));
print("searchPath prototype:" + imports.searchPath._proto_);
print("searching path is:\n" + imports.searchPath);
