# Denis Bernardes Oliveira

def filter(count):
    remove = []
    for key,value in count.items():
        if value <= 1:
            remove.append(key)
    for i in remove:
        count.pop(i)

    return count

def counter(v):
    count = {}
    for i in v:
        if i in count.keys():
            count[i] = count[i] + 1
        else:
            count[i] = 1
    return filter(count)


if __name__ == "__main__":
    v = [1,8,9,2,1,8,5,4,7,2,3,9,6,4,82,1,2,3,9,10,12,5,22,25,27,31,30,5,9,80,82,50,40,41,50]
    #v = [1,1,2,3,3,4,5,5,5]
    answer = counter(v)
    print(answer)
    #print(len(answer))
