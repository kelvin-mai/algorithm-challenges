(defn is_permutation [s1 s2]
  (let [sorted-s1 (sort s1)
        sorted-s2 (sort s2)]
  (= sorted-s1 sorted-s2)))

(is_permutation "dad" "add")
(is_permutation "true" "false")