using System;

namespace Alunos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Selecione uma opção:");
            Console.WriteLine("1- Inserir novo aluno");
            Console.WriteLine("2- ");
            Console.WriteLine("3- ");
            Console.WriteLine("X- Sair");
            string opcao = Console.ReadLine();

            while(opcao.ToUpper() != "X") {
                switch(opcao) {
                    case "1":
                        Console.WriteLine("Nome do aluno:");
                        Console.WriteLine("Nota do aluno:");
                        break;
                    case "2":
                        // TODO
                        break;
                    case "3":
                        // TODO
                        break;
                }

            Console.WriteLine("Selecione uma opção:");
            Console.WriteLine("1- Inserir novo aluno");
            Console.WriteLine("2- ");
            Console.WriteLine("3- ");
            Console.WriteLine("X- Sair");
            opcao = Console.ReadLine();
            }
        }

    }

}
