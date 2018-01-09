# solution
# compare the string to it's reverse after removing punctuation, case sensitivity and spaces

import string
def remove_punctuation(str):
    return "".join(i.lower() for i in str if i in string.ascii_letters)

def is_palindrome(str):
    str = remove_punctuation(str)
    return str == str[::-1]

print(is_palindrome('Racecar'))
print(is_palindrome('go dog'))
print(is_palindrome("Do good? I? No. Evil anon I deliver. I maim nine more hero men in Saginaw. Sanitary sword a tuck Carol, I! Lo, rack, cut a drowsy rat in Aswan. I gas nine more hero men in Miami. Reviled, I? no na, live on I do. O' God!"))
