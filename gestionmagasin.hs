-- GestionMagasin.hs

module Main where

data Produit = Produit
    { nom :: String
    , prix :: Double
    , stock :: Int
    } deriving (Show)

-- Liste initiale des produits
inventaire :: [Produit]
inventaire =
    [ Produit "Savon" 2.5 50
    , Produit "Sucre" 1.8 30
    , Produit "Riz" 1.2 100
    ]

-- Afficher un produit
afficherProduit :: Produit -> IO ()
afficherProduit p =
    putStrLn $
        nom p ++
        " | Prix: $" ++ show (prix p) ++
        " | Stock: " ++ show (stock p)

-- Afficher tout l'inventaire
afficherInventaire :: [Produit] -> IO ()
afficherInventaire produits = do
    putStrLn "\n=== INVENTAIRE DU MAGASIN ==="
    mapM_ afficherProduit produits

-- Ajouter du stock
ajouterStock :: String -> Int -> [Produit] -> [Produit]
ajouterStock produitNom quantite =
    map (\p ->
        if nom p == produitNom
        then p { stock = stock p + quantite }
        else p)

-- Effectuer une vente
vendreProduit :: String -> Int -> [Produit] -> [Produit]
vendreProduit produitNom quantite =
    map (\p ->
        if nom p == produitNom && stock p >= quantite
        then p { stock = stock p - quantite }
        else p)

main :: IO ()
main = do
    afficherInventaire inventaire

    let inventaire1 = ajouterStock "Sucre" 20 inventaire
    putStrLn "\nAprès ajout de 20 unités de sucre :"
    afficherInventaire inventaire1

    let inventaire2 = vendreProduit "Riz" 15 inventaire1
    putStrLn "\nAprès vente de 15 sacs de riz :"
    afficherInventaire inventaire2
