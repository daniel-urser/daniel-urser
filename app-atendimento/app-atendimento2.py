import tkinter as tk
from tkinter import messagebox
from PIL import Image, ImageTk
import sqlite3

img_home = None
img_otorrino = None
img_secretaria = None
img_pneumo = None

# Variável global para armazenar o nome do usuário
usuario_atual = None

# Caminho absoluto das imagens
CAMINHO_IMG = r"C:\Users\rodod\Desktop\codigos\APP\imagens"

# Criação do banco de dados e tabela (executado uma vez)
def criar_banco():
    con = sqlite3.connect("agendamentos.db")
    con.execute("""
    CREATE TABLE IF NOT EXISTS agendamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT NOT NULL,
        especialidade TEXT NOT NULL,
        status TEXT NOT NULL
    )
    """)
    con.commit()
    con.close()

def iniciar_app():
    global usuario_atual, janela, img_home, img_otorrino, img_secretaria, img_pneumo

    janela = tk.Tk()
    janela.title("Sistema de Agendamento")
    janela.geometry("600x450")
    janela.configure(bg="#f5f5f5")

    # --- Widgets da tela de login ---
    label_login = tk.Label(janela, text="Digite seu nome:", font=("Arial", 12), bg="#f5f5f5")
    label_login.pack(pady=(80, 10))

    entry_nome = tk.Entry(janela, font=("Arial", 12), width=30)
    entry_nome.pack(pady=5)

    def entrar():
        nonlocal label_login, entry_nome, btn_entrar
        nome = entry_nome.get().strip()
        if not nome:
            messagebox.showwarning("Aviso", "Digite seu nome para continuar.")
            return
        global usuario_atual
        usuario_atual = nome

        # Esconder widgets da tela de login
        label_login.pack_forget()
        entry_nome.pack_forget()
        btn_entrar.pack_forget()

        abrir_tela_agendamento()

    btn_entrar = tk.Button(
        janela, text="Entrar", font=("Arial", 12, "bold"),
        bg="#245b96", fg="white", padx=20, pady=10, command=entrar
    )
    btn_entrar.pack(pady=20)

    # --- Função que monta a tela de agendamento ---
    def abrir_tela_agendamento():
        global img_home, img_otorrino, img_secretaria, img_pneumo

        # Carregar imagens (após janela ser criada)
        img_home = ImageTk.PhotoImage(Image.open(f"{CAMINHO_IMG}\\weel.png").resize((24, 24)))
        img_otorrino = ImageTk.PhotoImage(Image.open(f"{CAMINHO_IMG}\\cotonete.png").resize((24, 24)))
        img_secretaria = ImageTk.PhotoImage(Image.open(f"{CAMINHO_IMG}\\doctorvisit.png").resize((24, 24)))
        img_pneumo = ImageTk.PhotoImage(Image.open(f"{CAMINHO_IMG}\\respiracao.png").resize((24, 24)))

        button_style = {
            "bg": "#245b96",
            "fg": "white",
            "font": ("Arial", 12, "bold"),
            "padx": 10,
            "pady": 10,
            "bd": 0,
            "activebackground": "#0056b3",
            "cursor": "hand2",
            "compound": "left"
        }

        def agendar(especialidade):
            con = sqlite3.connect("agendamentos.db")
            con.execute("INSERT INTO agendamentos (usuario, especialidade, status) VALUES (?, ?, ?)",
                        (usuario_atual, especialidade, "Aguardando"))
            con.commit()
            con.close()
            messagebox.showinfo(especialidade, f"{especialidade} agendado para {usuario_atual}.")
            try:
              especialidade==btn_secretaria
            except:
              print('entrando em contato com a secretaria')
           

        frame = tk.Frame(janela, bg="#f5f5f5")
        frame.pack(pady=20)

        btn_home = tk.Button(frame, text="Home", image=img_home, command=lambda: agendar("Home"), **button_style)
        btn_otorrino = tk.Button(frame, text="Otorrino", image=img_otorrino, command=lambda: agendar("Otorrino"), **button_style)
        btn_secretaria = tk.Button(frame, text="Secretaria", image=img_secretaria, command=lambda: agendar("Secretaria"), **button_style)
        btn_pneumo = tk.Button(frame, text="Pneumologista", image=img_pneumo, command=lambda: agendar("Pneumologista"), **button_style)

        btn_home.grid(row=0, column=0, padx=10, pady=10)
        btn_otorrino.grid(row=0, column=1, padx=10, pady=10)
        btn_secretaria.grid(row=1, column=0, padx=10, pady=10)
        btn_pneumo.grid(row=1, column=1, padx=10, pady=10)

        # Manter referência das imagens para não sumirem
        janela.imgs = [img_home, img_otorrino, img_secretaria, img_pneumo]

    janela.mainloop()

criar_banco()
iniciar_app()
