; using recursion
(defn build-fib
  [x]
  (conj x (+ (last x) (nth x (- (count x) 2)))))

(defn fib
  ([num] (fib [0 1] num))
  ([fib-list num]
   (if (<= (count fib-list) num)
     (recur (build-fib fib-list) num)
     fib-list)))

(defn fib-num [num]
  (last (fib num)))

; test case of 15
(fib 15)