;; fizzbuzz function
(def fizz? #(zero? (mod % 3)))
(def buzz? #(zero? (mod % 5)))
(def fizzbuzz? #(and (fizz? %) (buzz? %)))
(defn fizzbuzz
  [x]
  (cond
    (fizzbuzz? x) "FizzBuzz"
    (fizz? x) "Fizz"
    (buzz? x) "Buzz"))

;; fizzbuzz over an list from 1 to 100
(map fizzbuzz (range 1 100))