type IsEmptyType<T> = number extends T ? keyof T extends never ? true : false : false