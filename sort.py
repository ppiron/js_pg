def find_k_nearest(arr, k):
    dist = list(map(lambda x: (x[0]**2 + x[1]**2)**(0.5), arr))
    dist = sorted(arr)
    return dist[:k]

#print(find_k_nearest([(1,1), (2,2), (3,3)], 2))

def longest_sequence(str):
    sol = {}
    countmax = 0
    maxind = 0
    for i in range(len(str)):
        count = 1
        for k in range(i + 1, len(str)):
            if (str[k] == str[k - 1]) & (str[k] == str[i]):
                count += 1 
            else:
                break
        if str[i] in sol:
            if count > sol[str[i]]:
                sol[str[i]] = count
                if count > countmax:
                    countmax = count
                    maxind = i
        else:
            sol[str[i]] = count
            if count > countmax:
                countmax = count
                maxind = i
    ret = {}
    ret[str[maxind]] = countmax
    return ret

print(longest_sequence('ABBBCCDEBBBBEFF'))
