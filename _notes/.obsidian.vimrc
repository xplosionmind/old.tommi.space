syntax on
set autoindent
set incsearch
set smartcase
set hls
set number
set tabstop=4
set shiftwidth=4
set mouse=a
set showcmd
set guifont=Ubuntu\ Mono:h20
set inccommand=nosplit
autocmd BufReadPost *
      \ if line("'\"") >= 1 && line("'\"") <= line("$") && &ft !~# 'commit'
      \ |   exe "normal! g`\""
      \ | endif

if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')
"Plug 'phanviet/vim-monokai-pro'
Plug 'junegunn/fzf.vim'
Plug 'itchyny/lightline.vim'
Plug 'editorconfig/editorconfig-vim'
"Plug 'vim-scripts/c.vim'
"Plug 'rip-rip/clang_complete'
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-surround'
Plug 'w0rp/ale'
"Plug 'scrooloose/nerdtree'
Plug 'Shougo/deoplete.nvim'
Plug 'terryma/vim-multiple-cursors'

" MARKDOWN
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() }, 'for': ['markdown', 'vim-plug']}
Plug 'mzlogin/vim-markdown-toc'

"HTML SUGGESTED
Plug 'tmhedberg/matchit'
Plug 'tpope/vim-surround'
Plug 'tpope/vim-ragtag'
Plug 'mattn/emmet-vim'

"CSS COLOR HIGHLIGHT
Plug 'gko/vim-coloresque'

"THEMES
"Plug 'dracula/dracula-theme'
call plug#end()
set termguicolors
colo monokai_pro


" LEARN BY DEACTIVATING FEATURES

" Remove movement with arrow keys

" Remove in Command Mode
"cnoremap <Down> <Nop>
"cnoremap <Left> <Nop>
"cnoremap <Right> <Nop>
"cnoremap <Up> <Nop>

" Remove in Normal Mode
"nnoremap <Down> <Nop>
"nnoremap <Left> <Nop>
"nnoremap <Right> <Nop>
"nnoremap <Up> <Nop>

" Remove in Visual Mode
"vnoremap <Down> <Nop>
"vnoremap <Left> <Nop>
"vnoremap <Right> <Nop>
"vnoremap <Up> <Nop>
