var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [HSL]","category":"page"},{"location":"#Home","page":"Home","title":"HSL.jl documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A set of interfaces to HSL packages for sparse linear algebra.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Certain HSL packages are freely available to all, others are freely available to academics only. Please refer to the website above for licensing information. In all cases, users are responsible for obtaining HSL packages.","category":"page"},{"location":"#Installing","page":"Home","title":"Installing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> ]\npkg> add HSL","category":"page"},{"location":"","page":"Home","title":"Home","text":"At this point, make sure that there isn't a stray METIS library on your library path. You especially want to make sure that METIS 5 is not accessible because the HSL library currently interfaced only supports METIS 4. If you have such library accessible, it is important to remove it from the library path, at least temporarily. For example, if you are on OSX and are using Homebrew, you can hide METIS 5 with brew unlink metis. After the install procedure is complete, it is fine to link metis again with brew link metis.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Set the environment variables HSL_MA57_PATH and HSL_MA97_PATH to specify where the source archives tar.gz are stored. Alternatively, you can use the zip archive as long as unzip is installed on your system. The HSL Julia module will take care of compilation. Once the source archives have been placed in the locations indicated by the environment variables, run","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ]\npkg> build HSL\npkg> test HSL","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note that a C and Fortran compilers are required. Should it be necessary, you can set the compilers to use by setting the environment variables","category":"page"},{"location":"","page":"Home","title":"Home","text":"HSL_FC: the Fortran 90/95 compiler (default: gfortran)\nHSL_F77: the Fortran 77 compiler (default: the same as FC)\nHSL_CC: the C compiler (default: gcc).","category":"page"},{"location":"#Supported-Packages","page":"Home","title":"Supported Packages","text":"","category":"section"},{"location":"#HSL_MA97","page":"Home","title":"HSL_MA97","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Supported versions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"2.6.0\n2.7.0","category":"page"},{"location":"","page":"Home","title":"Home","text":"HSL_MA97: an OpenMP-based direct solver for symmetric linear systems.","category":"page"},{"location":"#HSL_MA57","page":"Home","title":"HSL_MA57","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"HSL_MA57 version 5.2.0: a sparse, multifrontal solver for symmetric linear systems.","category":"page"},{"location":"tutorial/#Tutorial","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"HSL MA57 and MA97 can be used for the solution of symmetric, possibly indefinite, linear systems. They are often used for the solution of saddle-point systems, i.e., systems of the form","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"beginbmatrix\nH  A^T \nA \nendbmatrix\nbeginbmatrix\nx  y\nendbmatrix\n=\nbeginbmatrix\nb  c\nendbmatrix","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Special cases occur when H is the identity matrix and either b = 0 or c = 0, which correspond to the least-squares problem","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"min_y  A^T y - b","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"and to the least-norm problem","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"min_x  x  textsubject to  Ax = c","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"respectively.","category":"page"},{"location":"tutorial/#HSL_MA97","page":"Tutorial","title":"HSL_MA97","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"Supported versions:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"2.6.0\n2.7.0","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"HSL_MA97: an OpenMP-based direct solver for symmetric linear systems. Example:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using MatrixMarket\nusing HSL\n\nK = MatrixMarket.mmread(\"K.mtx\")  # only the lower triangle\nrhs = readdlm(\"rhs.rhs\")\n\nLBL = Ma97(K)\nma97_factorize!(LBL)\nx = ma97_solve(LBL, rhs)  # or x = LBL \\ rhs","category":"page"},{"location":"tutorial/#Rectangular-Systems","page":"Tutorial","title":"Rectangular Systems","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"There is a convenience interface to solve rectangular systems that complements the sparse QR factorization in Julia.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"When A is m-by-n with m < n and has full row rank,","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(x, y) = ma97_solve(A, c)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"solves for the minimum-norm solution, i.e., x such that Ax = c and x + Aᵀ y = 0. The call","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(x, y) = ma97_min_norm(A, c)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"is also defined, and is equivalent to the above.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"When m > n and has full column rank,","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(r, x) = ma97_solve(A, b)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"solves for the least-squares solution, i.e., x such that r = b - Ax satisfies Aᵀ r = 0. The call","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(r, x) = ma97_least_squares(A, b)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"is also defined, and is equivalent to the above.","category":"page"},{"location":"tutorial/#HSL_MA57","page":"Tutorial","title":"HSL_MA57","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"HSL_MA57 version 5.2.0: a sparse, multifrontal solver for symmetric linear systems. Example:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using MatrixMarket\nusing HSL\n\nK = MatrixMarket.mmread(\"examples/K_0.mtx\")  # only the lower triangle\nrhs = readdlm(\"examples/rhs_0.rhs\")\nrhss = hcat(rhs, rhs)\n\n## factorize and solve\nLDL = Ma57(K)\nma57_factorize(LDL)\nLDL.info.rank\nx = ma57_solve(LDL, rhs)  # or x = LBL \\ rhs\nnorm(K*x - rhs)\nxx = ma57_solve(LDL, rhss)  # or x = LBL \\ rhss","category":"page"},{"location":"tutorial/#Rectangular-Systems-2","page":"Tutorial","title":"Rectangular Systems","text":"","category":"section"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"There is a convenience interface to solve rectangular systems that complements the sparse QR factorization in Julia.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"When A is m-by-n with m < n and has full row rank,","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(x, y) = ma57_solve(A, c)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"solves for the minimum-norm solution, i.e., x such that Ax = c and x + Aᵀ y = 0. The call","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(x, y) = ma57_min_norm(A, c)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"is also defined, and is equivalent to the above.","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"When m > n and has full column rank,","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(r, x) = ma57_solve(A, b)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"solves for the least-squares solution, i.e., x such that r = b - Ax satisfies Aᵀ r = 0. The call","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"(r, x) = ma57_least_squares(A, b)","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"is also defined, and is equivalent to the above. Example:","category":"page"},{"location":"tutorial/","page":"Tutorial","title":"Tutorial","text":"using MatrixMarket\nusing HSL\n\nK = MatrixMarket.mmread(\"examples/K_0.mtx\")  # only the lower triangle\nrhs = readdlm(\"examples/rhs_0.rhs\")\n\n## solve min norm\nK_mn = K[1:200,:]\nx_mn, y_mn = ma57_min_norm(K_mn, rhs[1:200]) # == ma57_solve(K_mn, rhs[1:200])\n\n## solve least squares\nK_ls = K[:,1:200]\nr_ls, x_ls = ma57_least_squares(K_ls, rhs)   # == ma57_solve(K_ls, rhs)","category":"page"}]
}
