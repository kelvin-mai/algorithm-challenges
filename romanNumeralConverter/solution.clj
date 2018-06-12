(def roman-reductions
     '((1000 "M")
       ( 900 "CM") ( 500 "D") ( 400 "CD") ( 100 "C")
       (  90 "XC") (  50 "L") (  40 "XL") (  10 "X")
       (   9 "IX") (   5 "V") (   4 "IV") (   1 "I")))

(defn to-roman
  [number]
  (let [roman-list
        (fn [number reduction-list acc]
          (let [[[value glyph] & reduction-tail] reduction-list]
            (cond (or (zero? number) (nil? value))
                    acc
                  (< number value)
                    (recur number reduction-tail acc)
                  :else
                    (recur (- number value) reduction-list (conj acc glyph)))))]
    (apply str
           (roman-list number roman-reductions []))))

(to-roman 2)
(to-roman 4)
(to-roman 5)
(to-roman 9)
(to-roman 32)
(to-roman 100)
(to-roman 1234)
(to-roman 3999)